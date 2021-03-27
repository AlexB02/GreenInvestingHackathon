import pyrebase

config = {
    "apiKey": "AIzaSyBMY-qC5lI8ZCW5MoJcj--D2ZyswABHkII",
    "authDomain": "greeninvestment-9d42a.firebaseapp.com",
    "databaseURL": "https://greeninvestment-9d42a-default-rtdb.europe-west1.firebasedatabase.app",
    "projectId": "greeninvestment-9d42a",
    "storageBucket": "greeninvestment-9d42a.appspot.com",
    "messagingSenderId": "952304435921",
    "appId": "1:952304435921:web:f8da6e6e19290e034f7bf0",
    "measurementId": "G-ELHN28XH1B"
};

firebase = pyrebase.initialize_app(config)

apple = {"PE": "1.2%", "ROI": "1.4%"}
stocks = {"AAPL": apple}
f1Stocks = {"AAPL": 4.04, "TSLA": 95.96}
portfolio1 = {"curr_value": 10, "green_index": "5/5", "stocks": f1Stocks}
users = {"alex": {"customFolio1": portfolio1}}
root = {"stocks": stocks, "users": users}

db = firebase.database()
db.set(root)
# db.get("stocks")#.set(stocks)
# database.get("stocks/apple").set(apple)
# database.get("users").set("Alex")
# database.get("users/alex").set(portfolio1)
# for att in database.get().each():
#     print(att.key() == "Alex")
# database.set(data)

# database.order_by_key()
