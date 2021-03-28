from flask import render_template, Flask
import os
from FirebaseStore import FB
from stockAnalysis.PortfolioHandler import Portfolio as PH

app = Flask("__main__", template_folder=(os.path.dirname(os.path.realpath(__file__)) + "/static/templatefolder"),
            static_folder=(os.path.dirname(os.path.realpath(__file__)) + "/static/react/app/static"))

db = FB()


@app.route("/")
def main():
    db.setStock("AAPL", {"PE": 1.4, "ROI": 34})
    db.setStock("MSFT", {"PE": 1.4, "ROI": 34})
    portfolio1 = {"curr_value": 10, "green_index": "5/5", "stocks": {"AAPL": 4.04, "TSLA": 95.96}}
    db.setPortfolio("alex", {"customFolio1": portfolio1})
    return render_template("index.html")


# @app.route("/setPortfolio", methods=["POST", "GET"]) {"user": user, "name": name, "stocks": {}}
def setPortfolio():
    user = "alex"  # request.json["user"]
    name = "portfolio"
    stocks = {"AAPL": 46.2, "MSFT": 53.8}
    # portfolio = {"curr_value": 10, "green_index": "5/5", "stocks": {"AAPL": 4.04, "TSLA": 95.96}} request.json["portfolio"]
    handler = PH(stocks)
    green_index = handler.portfolio_green_index()
    volatility = handler.portfolio_volatitity()
    heat_val = handler.portfolio_heat_value()
    growth_prospect = handler.portfolio_growth_prospect()
    db.setPortfolio(user, {name: {"green_index": green_index, "volatility": volatility, "heat_val": heat_val, "growth_prospect": growth_prospect, "stocks": stocks}})


# if __name__ == "__main__":
#     port = int(os.environ.get("PORT", 5000))
#     app.run(host='0.0.0.0', port=port, debug=True)

setPortfolio()
