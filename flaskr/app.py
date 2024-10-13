from flask import Flask, request, jsonify, send_file
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
    # Get request body
    data = request.get_json()

    # tempo, maxSeconds
    # Download the video
    dl_res = download_video(data["url"])

    print('Downloaded video:', dl_res['title'])
    print('Tempo:', dl_res['tempo'])
    print('Max seconds:', data['maxSeconds'])

    if 'tempo' in data:
        dl_res['tempo'] = int(data['tempo'])

    # Extract the notes
    notes = extract_notes(dl_res['file_path'], dl_res['tempo'], int(data['maxSeconds']))

    # Export score
    export_score(notes, dl_res['tempo'], dl_res['title'])

    return jsonify({"title": dl_res['title']})

    
@app.post("/download")
def download():
    # Download the video
    url = request.form["url"]
    data = download_video(url)

    return jsonify(data)


@app.get("/xml")
def xml():
    # Send the SXMLFKejwufh bnwejfuhiwer
    return send_file("output/sheet_music.xml", as_attachment=True)


@app.post("/pdf")
def pdf():
    # Send the PDF file
    return send_file("output/sheet_music.pdf", as_attachment=True)


@app.get("/xml/1")
def xml1():
    # Send the SXMLFKejwufh bnwejfuhiwer
    return send_file("1.xml", as_attachment=True)

@app.get("/xml/2")
def xml2():
    # Send the SXMLFKejwufh bnwejfuhiwer
    return send_file("2.xml", as_attachment=True)

@app.get("/xml/3")
def xml3():
    # Send the SXMLFKejwufh bnwejfuhiwer
    return send_file("3.xml", as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)