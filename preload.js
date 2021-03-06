// const { ipcRenderer } = require('electron');

 //window.ipcRenderer = require('electron').ipcRenderer;

// window.sendNotification=(message)=>{
//     ipcRenderer.send('notify',message)
// }

const { ipcRenderer, contextBridge } = require('electron');


contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  appApi: {
    quitApp() {
      ipcRenderer.send('app-quit');
    }
  },
  batteryApi: {

  },
  fileApi: {

  }
})

