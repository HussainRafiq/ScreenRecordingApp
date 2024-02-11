var electron=require("electron");
var app=electron.app;
var browserwindow=electron.BrowserWindow;
var path=require("path");
var url=require("url");
const { BrowserWindow } = require("electron");
var win;

function createwindow(){
    win=new BrowserWindow({ width: 1000,
        height: 900,
        webPreferences: {        /// <-- update this option
          nodeIntegration: true
    }});
    win.setMenu(null);
  //  win.webContents.openDevTools();
    win.loadURL(url.format({
        pathname:path.join(__dirname,"index.html"),
        protocol:"file",
        slashes:true
    }));
    win.on("closed",()=>{
        win=null;
    });
}
app.on("ready",createwindow);
app.on("window-all-closed",()=>{
    if(process.platform!=="darwin"){
        app.quit();
    }
});
app.on("activate",()=>{
if(win===null){
    createwindow();
}
});