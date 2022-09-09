const {app, BrowserWindow} = require('electron');
const contextMenu = require('electron-context-menu');
const path = require('path');
const os = require("os");
const fs = require('fs')

const userHomeDir = os.homedir();
console.log(userHomeDir)

var sfilePath = (`${userHomeDir}/aisc.setting.json`);
const Data = fs.readFileSync(sfilePath, {encoding:'utf8'});
const user_s = JSON.parse(Data);
var disableHardwareAcceleration = (user_s.disableHardwareAcceleration);
if (disableHardwareAcceleration == true) {
  app.disableHardwareAcceleration()
}

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1080,
      height: 650,
      title: "AI Student Community",
      icon: path.join(__dirname, '/aisc_round.png',),
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: false,
        spellcheck: true,
        preload: path.join(__dirname, 'preload.js')
      }
    })

    win.webContents.insertCSS('::-webkit-scrollbar { width: 0px; }')
    win.loadURL('https://forum.aistudent.community')

    win.on('new-window', function(e, url) {
      e.preventDefault();
      require('electron').shell.openExternal(url);
    });

    win.webContents.on('did-finish-load', ()=>{
      win.webContents.insertCSS('::-webkit-scrollbar { width: 0px; }')
    });

    contextMenu({
      showCopyImageAddress: true,
      showCopyVideoAddress: true,
    prepend: (defaultActions, parameters, browserWindow) => [
      {
        label: 'Back',
        click: () => {
          win.webContents.goBack()
        }
      },
      {
        label: 'Forward',
        click: () => {
          win.webContents.goForward()
        }
      },
      {
        label: 'Go to "Forum"',
        click: () => {
          win.loadURL('https://forum.aistudent.community')
          win.webContents.insertCSS('::-webkit-scrollbar { width: 0px; }')
        }
      },
      {
        label: 'Inspect element',
        click: () => {
          win.webContents.openDevTools()
        }
      }
    ]
  });
  }

  app.whenReady().then(() => {
    createWindow()
  })
