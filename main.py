import tkinter
import customtkinter
from pytube import YouTube


#Default Settings 
customtkinter.set_appearance_mode("System")
customtkinter.set_default_color_theme("blue")

# ProxyDown
app = customtkinter.CTk()
app.geometry("720x480")
app.title("ProxyDown | A Youtube Video downloader")


#Components
title =  customtkinter.CTkLabel(app, text="Paste the video link")
title.pack(padx=10, pady=10)

# App listening
app.mainloop()