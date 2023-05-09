import tkinter
import customtkinter
from pytube import YouTube


def startDownload() :
    try :
        ytLink = link.get()
        ytObject = YouTube(ytLink)
        video = ytObject.streams.get_highest_resolution()
        video.download()
    except: 
        print("There is an Error with the Link. Kindly check !")


#Default Settings 
customtkinter.set_appearance_mode("System")
customtkinter.set_default_color_theme("blue")

# ProxyDown
app = customtkinter.CTk()
app.geometry("720x480")
app.title("ProxyDown | A Youtube Video downloader")


title =  customtkinter.CTkLabel(app, text="Paste the video link")
title.pack(padx=10, pady=10)

url_var = tkinter.StringVar()
link = customtkinter.CTkEntry(app, width=350, height=40, textvariable=url_var)
link.pack()

download = customtkinter.CTkButton(app, text="Download", command=startDownload) 
download.pack()

# App listening
app.mainloop()