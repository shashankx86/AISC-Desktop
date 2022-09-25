const { app, BrowserWindow, ipcMain } = require('electron');
const contextMenu = require('electron-context-menu');
const path = require('path');

function xd() {
  const wv = document.getElementById("webview");
  wv.addEventListener('dom-ready', () => {
    const devtoolsView = document.getElementById('DevTools');
    const browser = wv.getWebContents();
    browser.setDevToolsWebContents(devtoolsView.getWebContents());
    browser.openDevTools();
});
}

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 700,
      title: "AI Student Community",
      icon: path.join(__dirname, 'icon/aisc_round.png',),
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
        prepend: () => [
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
          }
        ]
      }); } });
}

app.whenReady().then(() => {
    createWindow()
})