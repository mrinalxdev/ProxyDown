import tkinter
import customtkinter
from pytube import YouTube


def startDownload() :
    try :
        ytLink = link.get()
        ytObject = YouTube(ytLink)
        video = ytObject.streams.get_lowest_resolution()
        
        title.configure(text=ytObject.title, text_color="white")
        finishLabel.configure(text="")
        video.download()
    except:
        finishLabel.configure(text="Download Error", text_color="red")

    finishLabel.configure(text="Downloaded!")


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

finishLabel = customtkinter.CTkLabel(app, text="")
finishLabel.pack()

# App listening
app.mainloop()