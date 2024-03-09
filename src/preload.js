// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld('api_electron', {
    selectedPath: () => ipcRenderer.invoke('dialog:selectedPath'),
    close: () => ipcRenderer.invoke('close'),
    minimize: () => ipcRenderer.invoke('minimize'),
    getChartData(data) {ipcRenderer.send('getChartData', data)},
    readAccuracyXml() {ipcRenderer.send('readAccuracyXml');},
    readIdealPoint(data) {ipcRenderer.send("readIdealPoint", data)},
    moveMash2DHVFile() {ipcRenderer.send("moveMash2DHVFile")},
    loading() {ipcRenderer.send('loading')},
    redConfusion() {ipcRenderer.send('redConfusion')},
    readIdealConfusion() {ipcRenderer.invoke('readIdealConfusion')},
    onDataFromIpcMain: (channel, func) => {
        ipcRenderer.on(channel, func);
        return () => ipcRenderer.removeListener(channel, func);
    },
})