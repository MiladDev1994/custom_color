const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();

// Controllers
const { readConfusionController } = require('./Controller/readConfusion.controller')
const { readIdealConfusionController } = require('./Controller/readIdealConfusion.controller')
const { readAccuracyXmlController } = require('./Controller/readAccuracyXml.controller')
const { loadingController } = require('./Controller/loading.controller')
const { getChartDataController } = require('./Controller/getChartData.controller')
const { moveMash2DHVFileController } = require('./Controller/moveMash2DHVFile.controller')
const { readIdealPointController } = require('./Controller/readIdealPoint.controller')


if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    backgroundColor: 'white',
    frame: false,
    icon: path.join(__dirname, "assets/icon.ico"),
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.maximize()
  // mainWindow.webContents.openDevTools();

  ipcMain.handle('dialog:selectedPath', async (event) => {
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory'],
    })
    if (canceled) {
      return
    } else {
      return filePaths?.[0]
    }
  });

  ipcMain.handle("close", (event) => {
    mainWindow.close()
  })

  ipcMain.handle("minimize", (event) => {
    mainWindow.minimize()
  })
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


ipcMain.on("redConfusion", (event) => {
  readConfusionController(event)
})

ipcMain.on("readIdealConfusion", (event) => {
  readIdealConfusionController(event)
})

ipcMain.on("readAccuracyXml", (event) => {
  readAccuracyXmlController(event)
})

ipcMain.on("loading", (event, type) => {
  loadingController(event, type)
})

ipcMain.on('getChartData', (event, data) => {
  getChartDataController(event, data)
});

ipcMain.on("moveMash2DHVFile", (event) => {
  moveMash2DHVFileController(event)
})

ipcMain.on("readIdealPoint", (event, data) => {
  readIdealPointController(event, data)
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});