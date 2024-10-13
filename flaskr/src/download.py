import yt_dlp

def download_video(url: str) -> str:
    ydl_opts = {
        'format': '(bv*[height=1080][fps=60]+ba)/bv*[height=1080][fps=60]+ba/b',
        'outtmpl': 'downloads/%(title)s.%(ext)s',
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            # Extract video information first
            info_dict = ydl.extract_info(url, download=False)
            # Prepare the file path
            file_path = ydl.prepare_filename(info_dict)
            # Now download the video
            ydl.download([url])
            return file_path
    except Exception as e:
        return f"Error: {e}"
