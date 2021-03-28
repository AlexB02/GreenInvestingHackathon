import finviz
from currencyEnum import Currency as cur
from stockHeatEnum import heatCheck
from greenWebScraping import get_dictionary

class Stock():
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
        return profit_margin/const

    def get_heatValue(self):
        heat = float(self.stock.get('Rel Volume'))
        # volume 10% below or above 5d average volume determines 
        # how "hot" the stock is on that particular day
        if heat > 1.10:
            return heatCheck.HOT
        elif heat < 0.90:
            return heatCheck.COLD

    def get_volatility(self):
        volatility = float(self.stock.get("Volatility").split(" ")[1].strip("%"))
        return volatility

    def get_growth_prospect(self):
        target_price_ratio = self.get_target_price_ratio()
        price_earning_ratio = self.get_price_earning_ratio
        return target_price_ratio + price_earning_ratio

    def get_target_price_ratio(self):
        target_price = float(self.stock.get("Target Price"))
        current_price = float(self.stock.get("Price"))
        return float(target_price/current_price)

    def get_price_earning_ratio(self): 
        price_earning_ratio = self.stock.get('P/E')
        # 14 is average P/E
        return float(price_earning_ratio)/14
    
    def get_green_index(self):
        company_name = self.get_company().split(" ")[0]
        print(self.get_company().split(" ")[0])
        # print(company_name)
        dictionary = get_dictionary()
        try:
            return int((500-dictionary.get(company_name))/5)
        except:
            return 0

stock = Stock('MSFT')
print(stock.get_green_index())