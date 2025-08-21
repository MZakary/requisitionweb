const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  lockFile: (filePath) => ipcRenderer.invoke('lock-file', filePath),
  unlockFile: (filePath) => ipcRenderer.invoke('unlock-file', filePath),
  checkLock: (filePath) => ipcRenderer.invoke('check-lock', filePath), // ✅ add this
  // New: Listen for window close attempt
  onWindowCloseAttempt: (callback) => ipcRenderer.on('check-before-close', callback),
  sendCloseResponse: (isDirty) => ipcRenderer.invoke('confirm-close-response', isDirty),

  onTriggerDownload: (callback) => ipcRenderer.on('trigger-download', callback),
  setDashboardState: (state) => ipcRenderer.send('set-dashboard-state', state),
  
  saveJson: (filePath, jsonData) => ipcRenderer.invoke('save-json', filePath, jsonData),

// New layout config APIs
  saveLayoutConfig: (config) => ipcRenderer.invoke('save-layout-config', config),
  loadLayoutConfig: () => ipcRenderer.invoke('load-layout-config'),

});

