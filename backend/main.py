from flask import render_template, Flask
import os

app = Flask("__main__")

@app.route("/")
def main():
    return render_template("index.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)