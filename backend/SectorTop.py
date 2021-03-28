from finviz import Screener
from StockHandler import Stock

class Sector:
    def __init__(self, sector):
        self.sector = str(sector)
    
    def get_top_in_industry(self):
        sector1 = self.sector
        industry = sector1.replace(" ", "").lower()
        if(sector1 == "Technology" or sector1 == "Communication Services" or sector1 == "Financial" or sector1 == "Healthcare" or sector1 == "Consumer Cyclical"):
            filters = ['sec_' + industry, 'cap_mega']
        elif (sector1 == "Consumer Defensive"):
            filters = ['sec_' + industry, 'cap_largeover', "sh_price_o50", "sh_avgvol_o1000"]
        elif (sector1 == "Real Estate") :
            filters = ['sec_' + industry, 'cap_largeover', "sh_price_o100"]
        elif (sector1 == "Basic Materials") :
            filters = ['sec_' + industry, 'cap_largeover', "sh_price_o15", "sh_avgvol_o500"]
        else:
            filters = ['sec_' + industry, 'cap_largeover']

        stock_list = Screener(filters=filters, table='Performance', order='-marketcap')[0:10]
        s = {}
        for item in stock_list:
            stock = Stock(item.get("Ticker"))
            s[stock.get_green_index()] = stock.get_company()
        l = list(s.items())
        l.sort(reverse=True)
        return l[0:3]

a = Sector("Basic Materials")
print(a.get_top_in_industry())