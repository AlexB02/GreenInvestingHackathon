from flask import render_template, Flask
import os
from FirebaseStore import FB

app = Flask("__main__", template_folder=(os.path.dirname(os.path.realpath(__file__)) + "/static/templatefolder"),
            static_folder=(os.path.dirname(os.path.realpath(__file__)) + "/static/react/app/static"))

db = FB()


@app.route("/")
def main():
    db.setStock("AAPL", {"PE": 1.4, "ROI": 34})
    db.setStock("MSFT", {"PE": 1.4, "ROI": 34})
    f1Stocks = {"AAPL": 4.04, "TSLA": 95.96}
    portfolio1 = {"curr_value": 10, "green_index": "5/5", "stocks": f1Stocks}
    db.setPortfolio("alex", {"customFolio1": portfolio1})
    return render_template("index.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
