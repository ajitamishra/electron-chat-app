const {app,BrowserWindow , Notification,ipcMain} = require('electron')
const path = require('path');
const isDev = !app.isPackaged

function createWindow(){
   const win =  new BrowserWindow({
    width: 800, 
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript:true,
    contextIsolation:true,
      preload: __dirname + '/preload.js'
    }
  });
    
    win.loadFile('index.html');
    
}

// if(isDev)
// {
//     require('electron-reload')(__dirname, {
//         electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
//       })
// }

app.on('ready',createWindow);

ipcMain.on('notify',(e,message)=>{
    new Notification({title:'Notification', body:message}).show()
})

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin')
    {
        app.quit()
    }
})

app.on('activate',()=>{
    if(BrowserWindow.getAllWindows.length===0)
    {
        createWindow1();
    }
})