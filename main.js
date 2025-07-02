const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'src/assets/icon/icon.png'),
    webPreferences: {
      contextIsolation: true,
    },
  });

  win.loadFile(path.join(__dirname, 'dist/requisitionweb/browser/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
