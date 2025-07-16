const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  lockFile: (filePath) => ipcRenderer.invoke('lock-file', filePath),
  unlockFile: (filePath) => ipcRenderer.invoke('unlock-file', filePath),
  checkLock: (filePath) => ipcRenderer.invoke('check-lock', filePath), // ✅ add this
});

