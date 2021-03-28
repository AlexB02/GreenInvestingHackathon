from stockAttributeGetters import Stock

from currencyEnum import Currency as cur
from stockHeatEnum import heatCheck

class Portfolio():
    def __init__(self, portfolio):
        self.portfolio = portfolio
        
    def portfolio_volatility(self):
        total_vol = 0
        for item in self.portfolio.keys:
            stock = Stock(item)
            total_vol += (stock.get_volatility() * float(self.portfolio.get(item))/100)
        return total_vol

            
    def portfolio_heat_value(self):
        total_heat = 0
        for item in self.portfolio.keys:
            stock = Stock(item)
            total_heat += (stock.get_heatValue() * float(self.portfolio.get(item))/100)

        if total_heat > 1.10:
            return heatCheck.HOT
        elif total_heat < 0.90:
            return heatCheck.COLD

    def portfolio_growth_prospect(self):
        total_growth = 0
        for item in self.portfolio.keys:
            stock = Stock(item)
            total_growth += (stock.get_growth_prospect() * float(self.portfolio.get(item))/100)
        return total_growth

    def portfolio_green_index(self):
        total_green = 0
        for item in self.portfolio.keys:
            stock = Stock(item)
            total_green += (stock.get_green_index() * float(self.portfolio.get(item))/100)
        return total_green
