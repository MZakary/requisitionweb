const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');
const Database = require('better-sqlite3');


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
        buttons: ['Quitter sans enregistrer', 'Annuler', 'Sauvegarder et quitter'],
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

app.whenReady().then(() => {
  initDatabase();
  createWindow();
});

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
    // console.log('💾 SAVE LAYOUT CONFIG CALLED');
    // console.log('Config received:', config);

    ensureConfigDir();
    const configData = JSON.stringify(config, null, 2);
    // console.log('Writing to file:', CONFIG_FILE);

    await fs.promises.writeFile(CONFIG_FILE, configData, 'utf-8');
    // console.log('✅ Config saved successfully');

    // Verify the file was written
    const stats = fs.existsSync(CONFIG_FILE);
    // console.log('File exists after save:', stats);

    if (stats) {
      const content = fs.readFileSync(CONFIG_FILE, 'utf-8');
      // console.log('File content:', content);
    }

    return { success: true };
  } catch (err) {
    //console.error('❌ Error saving layout config:', err);
    return { success: false, error: err.message };
  }
});

ipcMain.handle('load-layout-config', async () => {
  try {
    //console.log('📖 LOAD LAYOUT CONFIG CALLED');
    ensureConfigDir();

    if (fs.existsSync(CONFIG_FILE)) {
      const configData = await fs.promises.readFile(CONFIG_FILE, 'utf-8');
      const config = JSON.parse(configData);
      //console.log('✅ Config loaded from file:', config);
      return { success: true, config: config };
    }

    // console.log('ℹ️ No config file found at:', CONFIG_FILE);
    return { success: true, config: null };

  } catch (err) {
    console.error('❌ Error loading layout config:', err);
    return { success: false, error: err.message };
  }
});


//#region RequisitionDB DEPRECATED - to be removed

const REQUISITION_ROOT = 'R:/AIMS/Réquisitions/Production';

let requisitionCache = null;

function getRequisitionsByType(type) {
  const all = getAllRequisitions();
  const lowerType = type.toLowerCase();
  return all.filter(r => r.ReqType && r.ReqType.toLowerCase() === lowerType);
}



function getAllRequisitions(forceRefresh = false) {

  if (requisitionCache && !forceRefresh) {
    return requisitionCache;
  }

  try {
    const types = fs.readdirSync(REQUISITION_ROOT).filter(t =>
      fs.statSync(path.join(REQUISITION_ROOT, t)).isDirectory()
    );

    const all = [];

    for (const type of types) {
      const dirPath = path.join(REQUISITION_ROOT, type);

      fs.readdirSync(dirPath)
        .filter(f => f.endsWith('.json'))
        .forEach(file => {
          const fullPath = path.join(dirPath, file);
          const json = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));

          all.push({
            ...json,
            __filePath: fullPath,
            __type: type
          });
        });
    }

    requisitionCache = all;

    return all;

  } catch (err) {
    console.error('Error reading all requisitions:', err);
    return [];
  }
}



function searchRequisitions(term) {
  const data = getAllRequisitions();

  const lowerTerm = term.toLowerCase();

  return data.filter(r =>
    JSON.stringify(r).toLowerCase().includes(lowerTerm)
  );
}




// =======================
// IPC Handlers
// =======================

ipcMain.handle('refresh-requisitions', async () => {
  try {
    getAllRequisitions(true);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
});


ipcMain.handle('get-requisitions-by-type', async (_, type) => {
  try {
    const data = getRequisitionsByType(type);
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

ipcMain.handle('get-all-requisitions', async () => {
  try {
    const data = getAllRequisitions();
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

ipcMain.handle('search-requisitions', async (_, term) => {
  try {
    const data = searchRequisitions(term);
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
});


//#endregion


//#region RequisitionDB NEW
// =======================
// 🗄️ SQLite Database
// =======================

const DB_PATH = path.join(
  'R:/AIMS/Réquisitions',
  'requisitionBD.db'
);

let db;

function initDatabase() {
  if (!fs.existsSync(DB_PATH)) {
    console.log('📁 Creating new SQLite DB on network drive');
  }

  db = new (require('better-sqlite3'))(DB_PATH, {
    timeout: 5000, // IMPORTANT for network drives
  });

  // Strongly recommended on network drives
  db.pragma('journal_mode = WAL');

  // First test table
  db.prepare(`
    CREATE TABLE IF NOT EXISTS Projets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      "Statut"	TEXT,
      "NumRequisition"	TEXT,
      "NumPOBCDDT"	INTEGER,
      "SessionEtude"	TEXT,
      "DateDemande"	TEXT,
      "PeriodeFinanciereDemande"	TEXT,
      "TypeClient"	TEXT,
      "Client"	TEXT,
      "SousCentreActivite"	TEXT,
      "NomContact"	TEXT,
      "NomProjet"	TEXT,
      "TypeProdDemande"	TEXT,
      "NumFichier"	TEXT,
      "DateRequise"	TEXT,
      "NoPhase"	INTEGER,
      "NoPageImprimer"	INTEGER,
      "Complexite"	TEXT,
      "TechMulti"	TEXT,
      "DateTermineMulti"	TEXT,
      "HeureTravailleMulti"	REAL,
      "TechTactile"	TEXT,
      "DateTermineTactile"	TEXT,
      "HeureTravailleTactile"	REAL,
      "TotalHeureTravaille"	REAL,
      "ProdPagesBrailleAbrege"	INTEGER,
      "ProdPagesBrailleIntegral"	INTEGER,
      "NoVolBraille"	INTEGER,
      "NoCarETextOuAgrandi"	INTEGER,
      "NoPageCarAgrandis"	INTEGER,
      "NoDessinStandards"	INTEGER,
      "NoDessinComplexes"	INTEGER,
      "NoPagesDessins"	INTEGER,
      "NoPagesAgrandisNumPDF"	INTEGER,
      "NoPDFHTMLFORM"	INTEGER,
      "NoSonore"	INTEGER,
      "No3D"	INTEGER,
      "NoQuantite"	INTEGER,
      "DateLivraison"	TEXT,
      "PeriodeFinLivraison"	TEXT,
      "TotalFacture"	REAL,
      "PrixCalcul"	REAL,
      "DateFacture"	TEXT,
      "PeriodeFinanciereFacture"	INTEGER,
      "NoFacture"	TEXT,
      "MontantFactCISSSMC"	REAL,
      "Commentaire"	TEXT
    )
  `).run();

  console.log('✅ SQLite initialized at:', DB_PATH);
}


ipcMain.handle('db-get-all-projects', () => {
  return db.prepare('SELECT * FROM Projets').all();
});

ipcMain.handle('db-search-projects', (_, term) => {
  return db.prepare('SELECT * FROM Projets WHERE NomProjet LIKE ? OR NumRequisition LIKE ?')
    .all(`%${term}%`, `%${term}%`);
});

ipcMain.handle('db-get-projects-by-type', (_, type) => {
  return db.prepare('SELECT * FROM Projets WHERE TypeProdDemande = ?').all(type);
});

ipcMain.handle('db-upload-project', (_, projet) => {
  try {
    const stmt = db.prepare(`
      INSERT INTO Projets (
        Statut,
        NumRequisition,
        NumPOBCDDT,
        SessionEtude,
        DateDemande,
        PeriodeFinanciereDemande,
        TypeClient,
        Client,
        SousCentreActivite,
        NomContact,
        NomProjet,
        TypeProdDemande,
        NumFichier,
        DateRequise,
        NoPhase,
        NoPageImprimer,
        Complexite,
        TechMulti,
        DateTermineMulti,
        HeureTravailleMulti,
        TechTactile,
        DateTermineTactile,
        HeureTravailleTactile,
        TotalHeureTravaille,
        ProdPagesBrailleAbrege,
        ProdPagesBrailleIntegral,
        NoVolBraille,
        NoCarETextOuAgrandi,
        NoPageCarAgrandis,
        NoDessinStandards,
        NoDessinComplexes,
        NoPagesDessins,
        NoPagesAgrandisNumPDF,
        NoPDFHTMLFORM,
        NoSonore,
        No3D,
        NoQuantite,
        DateLivraison,
        PeriodeFinLivraison,
        TotalFacture,
        PrixCalcul,
        DateFacture,
        PeriodeFinanciereFacture,
        NoFacture,
        MontantFactCISSSMC,
        Commentaire
      ) VALUES (
        @Statut,
        @NumRequisition,
        @NumPOBCDDT,
        @SessionEtude,
        @DateDemande,
        @PeriodeFinanciereDemande,
        @TypeClient,
        @Client,
        @SousCentreActivite,
        @NomContact,
        @NomProjet,
        @TypeProdDemande,
        @NumFichier,
        @DateRequise,
        @NoPhase,
        @NoPageImprimer,
        @Complexite,
        @TechMulti,
        @DateTermineMulti,
        @HeureTravailleMulti,
        @TechTactile,
        @DateTermineTactile,
        @HeureTravailleTactile,
        @TotalHeureTravaille,
        @ProdPagesBrailleAbrege,
        @ProdPagesBrailleIntegral,
        @NoVolBraille,
        @NoCarETextOuAgrandi,
        @NoPageCarAgrandis,
        @NoDessinStandards,
        @NoDessinComplexes,
        @NoPagesDessins,
        @NoPagesAgrandisNumPDF,
        @NoPDFHTMLFORM,
        @NoSonore,
        @No3D,
        @NoQuantite,
        @DateLivraison,
        @PeriodeFinLivraison,
        @TotalFacture,
        @PrixCalcul,
        @DateFacture,
        @PeriodeFinanciereFacture,
        @NoFacture,
        @MontantFactCISSSMC,
        @Commentaire
      )
    `);

    stmt.run(projet);
    return true;

  } catch (err) {
    console.error('❌ Failed to upload project:', err);
    return false;
  }
});
// Add this with your other database handlers in main.js

ipcMain.handle('db-find-project', (_, requisitionNum, phaseNum) => {
  console.log('🔍 Finding project:', { requisitionNum, phaseNum });
  try {
    const result = db.prepare(`
      SELECT * FROM Projets 
      WHERE NumRequisition = ? AND NoPhase = ?
    `).get(requisitionNum, phaseNum);

    console.log('✅ Find result:', result);
    return result || null;
  } catch (err) {
    console.error('❌ Failed to find project:', err);
    return null;
  }
});

ipcMain.handle('db-update-project', (_, projet) => {
  console.log('📝 Updating project:', projet);
  try {
    const stmt = db.prepare(`
      UPDATE Projets SET
        Statut = @Statut,
        NumPOBCDDT = @NumPOBCDDT,
        SessionEtude = @SessionEtude,
        DateDemande = @DateDemande,
        PeriodeFinanciereDemande = @PeriodeFinanciereDemande,
        TypeClient = @TypeClient,
        Client = @Client,
        SousCentreActivite = @SousCentreActivite,
        NomContact = @NomContact,
        NomProjet = @NomProjet,
        TypeProdDemande = @TypeProdDemande,
        NumFichier = @NumFichier,
        DateRequise = @DateRequise,
        NoPhase = @NoPhase,
        NoPageImprimer = @NoPageImprimer,
        Complexite = @Complexite,
        TechMulti = @TechMulti,
        DateTermineMulti = @DateTermineMulti,
        HeureTravailleMulti = @HeureTravailleMulti,
        TechTactile = @TechTactile,
        DateTermineTactile = @DateTermineTactile,
        HeureTravailleTactile = @HeureTravailleTactile,
        TotalHeureTravaille = @TotalHeureTravaille,
        ProdPagesBrailleAbrege = @ProdPagesBrailleAbrege,
        ProdPagesBrailleIntegral = @ProdPagesBrailleIntegral,
        NoVolBraille = @NoVolBraille,
        NoCarETextOuAgrandi = @NoCarETextOuAgrandi,
        NoPageCarAgrandis = @NoPageCarAgrandis,
        NoDessinStandards = @NoDessinStandards,
        NoDessinComplexes = @NoDessinComplexes,
        NoPagesDessins = @NoPagesDessins,
        NoPagesAgrandisNumPDF = @NoPagesAgrandisNumPDF,
        NoPDFHTMLFORM = @NoPDFHTMLFORM,
        NoSonore = @NoSonore,
        No3D = @No3D,
        NoQuantite = @NoQuantite,
        DateLivraison = @DateLivraison,
        PeriodeFinLivraison = @PeriodeFinLivraison,
        TotalFacture = @TotalFacture,
        PrixCalcul = @PrixCalcul,
        DateFacture = @DateFacture,
        PeriodeFinanciereFacture = @PeriodeFinanciereFacture,
        NoFacture = @NoFacture,
        MontantFactCISSSMC = @MontantFactCISSSMC,
        Commentaire = @Commentaire
      WHERE NumRequisition = @NumRequisition AND NoPhase = @NoPhase
    `);

    const result = stmt.run(projet);
    console.log('✅ Update result:', result);
    return result.changes > 0;
  } catch (err) {
    console.error('❌ Failed to update project:', err);
    return false;
  }
});

//#endregion