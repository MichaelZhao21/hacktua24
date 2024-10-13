import yt_dlp

def download_video(url: str) -> str:
    ydl_opts = {
        'format': '(bv*[height=1080][fps=60]+ba)/bv*[height=1080][fps=60]+ba/b',
        'outtmpl': 'downloads/%(title)s.%(ext)s',
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
            return f"Downloaded {ydl.extract_info(url, download=False)['title']}"
    except Exception as e:
        return f"Error: {e}"
