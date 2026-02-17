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

  //Requisition DB DEPRECATED - to be removed
  getByType: (type) => ipcRenderer.invoke('get-requisitions-by-type', type),
  getAll: () => ipcRenderer.invoke('get-all-requisitions'),
  search: (term) => ipcRenderer.invoke('search-requisitions', term),
  refreshRequisitions: () => ipcRenderer.invoke('refresh-requisitions'),


  // New test DB APIs
  getAllProjects: () => ipcRenderer.invoke('db-get-all-projects'),
  searchProjects: (term) => ipcRenderer.invoke('db-search-projects', term),
  getProjectsByType: (type) => ipcRenderer.invoke('db-get-projects-by-type', type),
  uploadProject: (projet) => ipcRenderer.invoke('db-upload-project', projet),
  updateProject: (projet) => ipcRenderer.invoke('db-update-project', projet), // ← ADD THIS
  findProject: (requisitionNum, phaseNum) => ipcRenderer.invoke('db-find-project', requisitionNum, phaseNum),
});

