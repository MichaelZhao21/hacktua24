from flask import Flask
from flask import render_template, request
from flask_cors import CORS
from dotenv import load_dotenv

from src.download import download_video
from src.extract import extract_notes
from src.score import export_score

load_dotenv()


app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/snatch", methods=["POST"])
def snatch():
    # Download the video
    url = request.form["url"]
    name = download_video(url)

    # Extract the notes
    notes = extract_notes(name)

    # Export score
    export_score(notes)

    return name

    
@app.post("/download")
def download():
    # Download the video
    url = request.form["url"]
    name = download_video(url)

    return name


if __name__ == "__main__":
    app.run(debug=True)