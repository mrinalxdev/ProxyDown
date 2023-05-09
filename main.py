import tkinter
import customtkinter
from pytube import YouTube


def startDownload() :
    try :
        ytLink = link.get()
        ytObject = YouTube(ytLink, on_progress_callback=on_progress)
        video = ytObject.streams.get_lowest_resolution()
        
        title.configure(text=ytObject.title, text_color="white")
        finishLabel.configure(text="")
        video.download()
        finishLabel.configure(text="Downloaded!")
    except:
        finishLabel.configure(text="Download Error", text_color="red")


def on_progress(stream, chunk, bytes_remaining):
    total_size = stream.filesize
    bytes_downloaded = total_size - bytes_remaining
    percentage_of_completetion = bytes_downloaded / total_size * 100
    per = str(int(percentage_of_completetion))
    pPercentage.configure(text=per + '%')
    pPercentage.update()

    progressBar.float((percentage_of_completetion) / 100)


#Default Settings 
customtkinter.set_appearance_mode("System")
customtkinter.set_default_color_theme("blue")

# ProxyDown
app = customtkinter.CTk()
app.geometry("480x360")
app.title("ProxyDown | A Youtube Video downloader")


title =  customtkinter.CTkLabel(app, text="Paste the video link")
title.pack(padx=10, pady=10)

url_var = tkinter.StringVar()
link = customtkinter.CTkEntry(app, width=350, height=40, textvariable=url_var)
link.pack()

download = customtkinter.CTkButton(app, text="Download", command=startDownload) 
download.pack(padx=10 ,pady=10)

pPercentage = customtkinter.CTkLabel(app, text="0%")
pPercentage.pack()

progressBar = customtkinter.CTkProgressBar(app, width=400)
progressBar.set(0)
progressBar.pack(padx=10, pady=10)

finishLabel = customtkinter.CTkLabel(app, text="")
finishLabel.pack()

# App listening
app.mainloop()