const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Karaokub',
    width: 2000,
    height: 1000
  })

  const startUrl = url.format({
    pathname: path.join(__dirname, './app/dist/index.html'),
    protocol: 'file'
  })
  mainWindow.setMenu(null)
  if (process.env.STATUS == 'dev') {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  }
  else mainWindow.loadURL(startUrl)
}
app.whenReady().then(createMainWindow)
