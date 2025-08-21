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

   // Intercept the close request
  let canClose = false;
  let isOnDashboard = false;

  win.on('close', async (e) => {

    if (isOnDashboard) {
      // if on dashboard, always allow close
      return;
    }

    if (!canClose) {
      e.preventDefault(); // Cancel default close behavior
      const result = await win.webContents.send('check-before-close');
      // wait for renderer to send back whether form is dirty
    }
  });

  ipcMain.handle('confirm-close-response', async (_, isFormDirty) => {
      if (isFormDirty) {
        const result = await dialog.showMessageBox({
          type: 'question',
          buttons: ['Quitter sans enregistrer', 'Annuler', 'Télécharger'],
          defaultId: 2,
          cancelId: 1,
          message: 'Des modifications non enregistrées seront perdues. Voulez-vous vraiment quitter ?',
        });

        if (result.response === 0) {
          canClose = true;
          win.close();
        } else if (result.response === 2) {
          // Send IPC to renderer to trigger download
          win.webContents.send('trigger-download');
        }
      // else: do nothing
    } else {
      canClose = true;
      win.close();
    }
  });

  ipcMain.on('set-dashboard-state', (_, isDashboard) => {
    isOnDashboard = isDashboard;
  });
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

ipcMain.handle('save-json', async (_, filePath, jsonData) => {
  try {
    await fs.promises.writeFile(filePath, jsonData, 'utf-8');
    return { success: true };
  } catch (err) {
    console.error('Error saving file:', err);
    return { success: false, error: err.message };
  }
});