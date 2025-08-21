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

//----------------------------------------------------------------------

// Add this near the top of the file
const CONFIG_DIR = path.join(os.homedir(), '.requisitionweb');
const CONFIG_FILE = path.join(CONFIG_DIR, 'layout-config.json');

// Ensure config directory exists
function ensureConfigDir() {
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }
}

// Add these IPC handlers in your main.js, preferably near the other IPC handlers
ipcMain.handle('save-layout-config', async (_, config) => {
  try {
    console.log('💾 SAVE LAYOUT CONFIG CALLED');
    console.log('Config received:', config);
    
    ensureConfigDir();
    const configData = JSON.stringify(config, null, 2);
    console.log('Writing to file:', CONFIG_FILE);
    
    await fs.promises.writeFile(CONFIG_FILE, configData, 'utf-8');
    console.log('✅ Config saved successfully');
    
    // Verify the file was written
    const stats = fs.existsSync(CONFIG_FILE);
    console.log('File exists after save:', stats);
    
    if (stats) {
      const content = fs.readFileSync(CONFIG_FILE, 'utf-8');
      console.log('File content:', content);
    }
    
    return { success: true };
  } catch (err) {
    console.error('❌ Error saving layout config:', err);
    return { success: false, error: err.message };
  }
});

ipcMain.handle('load-layout-config', async () => {
  try {
    console.log('📖 LOAD LAYOUT CONFIG CALLED');
    ensureConfigDir();
    
    if (fs.existsSync(CONFIG_FILE)) {
      const configData = await fs.promises.readFile(CONFIG_FILE, 'utf-8');
      const config = JSON.parse(configData);
      console.log('✅ Config loaded from file:', config);
      return { success: true, config: config };
    }
    
    console.log('ℹ️ No config file found at:', CONFIG_FILE);
    return { success: true, config: null };
    
  } catch (err) {
    console.error('❌ Error loading layout config:', err);
    return { success: false, error: err.message };
  }
});