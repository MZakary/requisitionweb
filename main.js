const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'src/assets/icon/icon.png'),
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  win.loadFile(path.join(__dirname, 'dist/requisitionweb/browser/index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// =================
// 🔐 Locking logic
// =================

function getLockPath(filePath) {
  return `${filePath}.lock`;
}

function getCurrentUser() {
  return os.userInfo().username;
}

ipcMain.handle('open-file-dialog', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'JSON Files', extensions: ['json'] }]
  });

  if (result.canceled || !result.filePaths.length) return null;
  return result.filePaths[0];
});

ipcMain.handle('lock-file', async (_, filePath) => {
  const lockPath = getLockPath(filePath);
  const user = getCurrentUser();

  if (fs.existsSync(lockPath)) {
    const owner = fs.readFileSync(lockPath, 'utf-8');
    if (owner === user) return { success: true, alreadyOwned: true };
    return { success: false, lockedBy: owner };
  }

  fs.writeFileSync(lockPath, user, 'utf-8');
  return { success: true };
});

ipcMain.handle('unlock-file', async (_, filePath) => {
  const lockPath = getLockPath(filePath);
  const user = getCurrentUser();

  if (fs.existsSync(lockPath)) {
    const owner = fs.readFileSync(lockPath, 'utf-8');
    if (owner === user) {
      fs.unlinkSync(lockPath);
      return { success: true };
    } else {
      return { success: false, message: `Locked by ${owner}` };
    }
  }

  return { success: false, message: 'No lock file found' };
});

ipcMain.handle('check-lock', async (_, filePath) => {
  const lockPath = getLockPath(filePath);
  if (fs.existsSync(lockPath)) {
    const owner = fs.readFileSync(lockPath, 'utf-8');
    return { locked: true, lockedBy: owner };
  }
  return { locked: false };
});

