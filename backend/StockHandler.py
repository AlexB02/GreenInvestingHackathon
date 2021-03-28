import finviz
from finviz import Screener
from CurrencyEnum import Currency as cur
from HeatEnum import HeatCheck
from GreenWebScraping import get_global_dictionary, get_usa_dictionary
from datetime import date


class Stock:
    def __init__(self, ticker):
        self.ticker = ticker
        self.stock = finviz.get_stock(ticker)

    def get_sector(self):
        return self.stock.get("Sector")

    def get_current_price(self):
        current_price = float(self.stock.get("Price"))
        return current_price

    def get_company(self):
        company_name = self.stock.get("Company")
        return company_name

    def get_currency(self):
        country = self.stock.get('Country')
        if country == 'USA':
            return cur.USD
        elif country == 'United Kingdom':
            return cur.GBP
        else:
            return cur.EUR

    def get_profit_margin_ratio(self):
        profit_margin = float(self.stock.get('Profit Margin').strip('%'))
        # average profit margin for public companies on S&P500
        const = 14
        return profit_margin / const

    def get_heatValue(self):
        heat = float(self.stock.get('Rel Volume'))
        # volume 10% below or above 5d average volume determines
        # how "hot" the stock is on that particular day
        if heat > 1.10:
            return HeatCheck.HOT
        elif heat < 0.90:
            return HeatCheck.COLD

    def get_volatility(self):
        volatility = float(self.stock.get("Volatility").split(" ")[1].strip("%"))
        return volatility

    def get_growth_prospect(self):
        target_price_ratio = self.get_target_price_ratio()
        price_earning_ratio = self.get_price_earning_ratio
        return target_price_ratio + price_earning_ratio()

    def get_target_price_ratio(self):
        target_price = float(self.stock.get("Target Price"))
        current_price = float(self.stock.get("Price"))
        return float(target_price / current_price)

    def get_price_earning_ratio(self):
        price_earning_ratio = self.stock.get('P/E')
        # 14 is average P/E
        return float(price_earning_ratio) / 14

    def get_green_index(self):
        company_name = self.get_company().split(" ")[0]
        if (self.stock.get('Country') == "USA"):
            dictionary = get_usa_dictionary()
        else:
            dictionary = get_global_dictionary()
        try:
            return int((500 - dictionary.get(company_name)) / 5)
        except:
            return 0

    def get_heat_check_value(self):
        return float(self.stock.get('Rel Volume'))

    def make_profile(self):
        return {
            "date": str(date.today()),
            "company": self.get_company(),
            "current price": self.get_current_price(),
            "volatility": self.get_volatility(),
            "sector": self.get_sector(),
            "currency": str(self.get_currency()),
            "profit_margin_ratio": self.get_profit_margin_ratio(),
            "get_heat_value": str(self.get_heatValue()),
            "growth_prospect": self.get_growth_prospect(),
            "target_price_ratio": self.get_target_price_ratio(),
            "price_earning_ratio": self.get_price_earning_ratio(),
            "green_index": self.get_green_index()
        }

#     @staticmethod
#     def get_top_in_industry(sector):
#         sector = str(sector)
#         industry = sector.replace(" ", "").lower()
#         if(sector == "Technology" or sector == "Communication Services" or sector == "Financial" or sector == "Healthcare" or sector == "Consumer Cyclical"):
#             filters = ['sec_' + industry, 'cap_mega']
#         elif (sector == "Consumer Defensive"):
#             filters = ['sec_' + industry, 'cap_largeover', "sh_price_o50", "sh_avgvol_o1000"]
#         elif (sector == "Real Estate") :
#             filters = ['sec_' + industry, 'cap_largeover', "sh_price_o100"]
#         elif (sector == "Basic Materials") :
#             filters = ['sec_' + industry, 'cap_largeover', "sh_price_o15", "sh_avgvol_o500"]
#         else:
#             filters = ['sec_' + industry, 'cap_largeover']

#         stock_list = Screener(filters=filters, table='Performance', order='-marketcap')[0:10]
#         s = {}
#         for item in stock_list:
#             stock = Stock(item.get("Ticker"))
#             s[stock.get_green_index()] = stock.get_company()
#         l = list(s.items())
#         l.sort(reverse=True)
#         return l[0:3]

# print(Stock.get_top_in_industry("Consumer Defensive"))