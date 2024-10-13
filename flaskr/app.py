from flask import Flask
from flask import render_template, request
from src.download import download_video

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/download", methods=["POST"])
def download():
    url = request.form["url"]
    return download_video(url)


if __name__ == "__main__":
    app.run(debug=True)