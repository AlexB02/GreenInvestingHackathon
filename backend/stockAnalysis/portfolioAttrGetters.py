from stockAttributeGetters import Stock

from currencyEnum import Currency as cur
from stockHeatEnum import heatCheck

class Portfolio():
    def __init__(self, list):
        self.list = list
    
    def portfolio_volatitity(self):
        length_list = len(list)
        total_vol = 0
        for item in self.list:
            stock = Stock(item)
            total_vol += stock.get_volatility
        return total_vol/length_list

            
    def portfolio_heat_value(self):
        length_list = len(list)
        total_heat = 0
        for item in self.list:
            stock = Stock(item)
            total_heat += stock.get_heatValue
        if total_heat/length_list > 1.10:
            return heatCheck.HOT
        elif total_heat/length_list < 0.90:
            return heatCheck.COLD
