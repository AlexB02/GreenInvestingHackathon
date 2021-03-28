from flask import render_template, Flask, request, jsonify, make_response
import os
import finviz
from FirebaseStore import FB
from PortfolioHandler import Portfolio as Ph
from SectorTop import Sector
from StockHandler import Stock as Sh
from datetime import date
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'

db = FB()

@app.route("/get", methods=["POST", "GET"])
@cross_origin()
def get():
    ticker = request.json["ticker"]
    response(ticker)
    response.headers.add('Access-Control-Allow-Origin', "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

@app.route("/getPortfolio", methods=["POST", "GET"])
@cross_origin()
def getPortfolio():
    user = request.json["user"]
    name = request.json["name"]
    return jsonify(db.getPortfolio(user, name))


@app.route("/setPortfolio", methods=["POST", "GET"])  # {"user": user, "name": name, "stocks": {}}
@cross_origin()
def setPortfolio():
    user = request.json["user"]
    name = request.json["name"]
    stocks = request.json["stocks"]  # {"AAPL": 46.2, "MSFT": 53.8}
    handler = Ph(stocks)

    db.setPortfolio(user, {name: handler.make_profile()})
    return jsonify({"success": "success"})

@app.route("/getStock", methods=["POST", "GET"])
@cross_origin()
def getStock():
    ticker = request.json["ticker"]
    return jsonify(db.getStock(ticker))

@app.route("/getTopThreeGreenStocks", methods=["POST", "GET"])
@cross_origin()
def getTopThreeGreenStocks():
    industry = Sector("Technology") # Sector(request.json["industry"])
    stocks = []
    for ticker in industry.get_top_in_industry():
        stocks.append(Sh(ticker).make_profile())
    return jsonify({"top_stocks": stocks})


def getStockLocal(ticker):
    return db.getStock(ticker)


@app.route("/refreshstock", methods=["POST", "GET"])
@cross_origin()
def refreshStock():
    ticker = request.json["ticker"]
    if db.requiresUpdate(ticker):
        handler = Sh(ticker)
        db.setStock(ticker, handler.make_profile())
        print("Set stock")
    return jsonify(getStockLocal(ticker))


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
