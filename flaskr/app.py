from flask import Flask
from flask import render_template, request
from src.download import download_video
from src.extract import extract_notes

app = Flask(__name__)

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
    print(notes)

    return name

    
@app.post("/download")
def download():
    # Download the video
    url = request.form["url"]
    name = download_video(url)

    return name


if __name__ == "__main__":
    app.run(debug=True)