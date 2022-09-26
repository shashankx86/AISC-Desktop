const { app, BrowserWindow, ipcMain } = require('electron');
const contextMenu = require('electron-context-menu');
const paste = require("better-pastebin");
const ncp = require("copy-paste");
const path = require('path');

function createPaste(key, content) {
  paste.setDevKey(key);
    paste.create({
        contents: content,
        name: "",
        privacy: "1",
        format: "text",
        expires: "N"
    }, function(success, url) {
        if(success) {
          ncp.copy(url)
          console.log(url);
        } else {
            alert("Failed to create Paste");
        }
  });
}

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 700,
      title: "AI Student Community",
      icon: path.join(__dirname, 'icon/aisc_round.png',),
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: true,
        webviewTag: true,
        sandbox: false,
        spellcheck: true
      }
    })

    win.loadFile("index.html")
    win.webContents.insertCSS('::-webkit-scrollbar { width: 0px; }')
    win.webContents.on('did-finish-load', function() {
      ipcMain.on('asynchronous-message', (event, arg) => {
        if (arg === true) {
          win.webContents.insertCSS('::-webkit-scrollbar { width: 0px; }')
        }
      })
    });

    app.on("web-contents-created", (e, contents) => { if (contents.getType() == "webview") { 
      contextMenu({ 
        window: contents,
        showCopyImageAddress: true,
        showCopyVideoAddress: true,
        prepend: (defaultActions, parameters, browserWindow) => [
          {
            label: 'Back',
            click: () => {
              win.webContents.executeJavaScript("webview.goBack();"); 
            }
          },
          {
            label: 'Forward',
            click: () => {
              win.webContents.executeJavaScript("webview.goForward();");              
            }
          },
          {
            label: 'Reload',
            click: () => {
              win.webContents.executeJavaScript("webview.reload();");              
            }
          },
          {
            label: 'Pastebin “{selection}”',
            visible: parameters.selectionText.trim().length > 0,
            click: () => {
              createPaste("xoImaDw6fZIPm8fgA1wsUOHS6lPObF4x", parameters.selectionText)              
            }
          }
        ]
      }); } });
}

app.whenReady().then(() => {
    createWindow()
})