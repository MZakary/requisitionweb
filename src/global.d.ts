export {}; // Marks this file as a module

declare global {
  interface Window {
    electronAPI: {
      // File / Lock APIs
      openFileDialog: () => Promise<string>;
      lockFile: (filePath: string) => Promise<any>;
      unlockFile: (filePath: string) => Promise<any>;
      checkLock: (filePath: string) => Promise<any>;

      // Layout config
      saveLayoutConfig: (config: layoutConfig) => Promise<{ success: boolean; error?: string }>;
      loadLayoutConfig: () => Promise<{ success: boolean; config?: layoutConfig; error?: string }>;
      saveJson: (filePath: string, jsonData: string) => Promise<{ success: boolean; error?: string }>;
      onWindowCloseAttempt: (callback: () => void) => void;
      sendCloseResponse: (isDirty: boolean) => void;
      onTriggerDownload: (callback: () => void) => void;

      getAllProjects: () => Promise<ProjetRow[]>;
      searchProjects: (term: string) => Promise<ProjetRow[]>;
      getProjectsByType: (type: string) => Promise<ProjetRow[]>;
      uploadProject: (projet: ProjetRow) => Promise<boolean>;
      updateProject: (projet: ProjetRow) => Promise<boolean>; // ← ADD THIS
      findProject: (requisitionNum: string, phaseNum: number) => Promise<ProjetRow | null>; // ← ADD THIS
      
    };
  }

  interface layoutConfig {
    preset?: string;
    primary?: string;
    surface?: string | undefined | null;
    darkTheme?: boolean;
    menuMode?: string;
  }

  interface ProjetRow {
    Id: number;
    Statut: string;
    NumRequisition: string;
    NumPOBCDDT?: number;
    SessionEtude?: string;
    DateDemande?: string;
    PeriodeFinanciereDemande?: string;
    TypeClient?: string;
    Client?: string;
    SousCentreActivite?: string;
    NomContact?: string;
    NomProjet?: string;
    TypeProdDemande?: string;
    NumFichier?: string;
    DateRequise?: string;
    NoPhase?: number;
    NoPageImprimer?: number;
    Complexite?: string;
    TechMulti?: string;
    DateTermineMulti?: string;
    HeureTravailleMulti?: number;
    TechTactile?: string;
    DateTermineTactile?: string;
    HeureTravailleTactile?: number;
    TotalHeureTravaille?: number;
    ProdPagesBrailleAbrege?: number;
    ProdPagesBrailleIntegral?: number;
    NoVolBraille?: number;
    NoCarETextOuAgrandi?: number;
    NoPageCarAgrandis?: number;
    NoDessinStandards?: number;
    NoDessinComplexes?: number;
    NoPagesDessins?: number;
    NoPagesAgrandisNumPDF?: number;
    NoPDFHTMLFORM?: number;
    NoSonore?: number;
    No3D?: number;
    NoQuantite?: number;
    DateLivraison?: string;
    PeriodeFinLivraison?: string;
    TotalFacture?: number;
    PrixCalcul?: number;
    DateFacture?: string;
    PeriodeFinanciereFacture?: number;
    NoFacture?: string;
    MontantFactCISSSMC?: number;
    Commentaire?: string;
  }
}
