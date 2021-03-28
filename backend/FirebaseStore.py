import pyrebase
from datetime import date
from StockHandler import Stock as Sh

class FB:

    def __init__(self):
        config = {
          "apiKey": "AIzaSyBMY-qC5lI8ZCW5MoJcj--D2ZyswABHkII",
          "authDomain": "greeninvestment-9d42a.firebaseapp.com",
          "databaseURL": "https://greeninvestment-9d42a-default-rtdb.europe-west1.firebasedatabase.app",
          "projectId": "greeninvestment-9d42a",
          "storageBucket": "greeninvestment-9d42a.appspot.com",
          "messagingSenderId": "952304435921",
          "appId": "1:952304435921:web:f8da6e6e19290e034f7bf0",
          "measurementId": "G-ELHN28XH1B"
        }

        self.db = pyrebase.initialize_app(config).database()

    def setPortfolio(self, name, portfolio):
        """Take a username * portfolio & set it in the realtime database"""
        self.db.child("users/" + name).set(portfolio)
        return True

    def getPortfolio(self, user, name):
        portfolio = {}
        p = self.db.child().get("users/" + user + "/" + name)
        for att in p.each():
            portfolio[att.key()] = att.val()
        return portfolio

    def setStock(self, ticker, data):
        """Take a ticker and data about it & set it in the realtime database"""
        self.db.child("stocks/"+ticker).set(data)

    def getStock(self, ticker):
        try:
            p = self.db.child("stocks").get()
            stock = {}
            for att in p.each():
                stock[att.key()] = att.val()
            return stock
        except Exception as e:
            self.setStock(ticker, Sh(ticker).make_profile())
            return jsonify(self.getStock(ticker))

    def requiresUpdate(self, ticker):
        try:
            return getStock(ticker).get("date") != str(date.today)
        except:
            return True
