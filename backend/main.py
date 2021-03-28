from flask import render_template, Flask, request, jsonify
import os
from FirebaseStore import FB
from PortfolioHandler import Portfolio as Ph
from StockHandler import Stock as Sh
from datetime import date

app = Flask("__main__", template_folder=(os.path.dirname(os.path.realpath(__file__)) + "/static/templatefolder"),
            static_folder=(os.path.dirname(os.path.realpath(__file__)) + "/static/react/app/static"))

db = FB()


@app.route("/")
def main():
    return render_template("index.html")


@app.route("/getPortfolio", methods=["POST", "GET"])
def getPortfolio():
    user = request.json["user"]
    name = request.json["name"]
    return db.getPortfolio(user, name)


@app.route("/setPortfolio", methods=["POST", "GET"])  # {"user": user, "name": name, "stocks": {}}
def setPortfolio():
    user = request.json["user"]
    name = request.json["name"]
    stocks = request.json["stocks"]  # {"AAPL": 46.2, "MSFT": 53.8}
    handler = Ph(stocks)

    db.setPortfolio(user, {name: handler.make_profile()})
    return jsonify({"success": "success"})


@app.route("/getStock", methods=["POST", "GET"])
def getStock():
    ticker = request.json["ticker"]
    return db.getStock(ticker)


def getStockLocal(ticker):
    return db.getStock(ticker)


@app.route("/setStock", methods=["POST", "GET"])
def refreshStock():
    ticker = request.json["ticker"]
    if db.requiresUpdate(ticker):
        handler = Sh(ticker)
        db.setStock(ticker, handler.make_profile())
    return getStockLocal(ticker)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
