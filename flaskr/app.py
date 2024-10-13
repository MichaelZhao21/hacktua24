from flask import Flask
from flask import render_template, request
import yt_dlp
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
    #return "hacktua24"

@app.route("/download", methods=["POST"])
def download():
    url = request.form["url"]
    ydl_opts = {
        'outtmpl': 'downloads/%(title)s.%(ext)s',
    }
    try:
        #yt = YouTube(url)
        #yt.streams.get_highest_resolution().download(output_path="downloads/")
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        return render_template("submission.html")
    except Exception as e:
        return f"Error: {e}"



if __name__ == "__main__":
    app.run(debug=True)