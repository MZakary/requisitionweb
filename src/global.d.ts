export {}; // Marks this file as a module

declare global {
  interface Window {
    electronAPI: {
      openFileDialog: () => Promise<string>;
      lockFile: (filePath: string) => Promise<any>;
      unlockFile: (filePath: string) => Promise<any>;
      checkLock: (filePath: string) => Promise<any>;
      
      // New layout config APIs
      saveLayoutConfig: (config: layoutConfig) => Promise<{ success: boolean; error?: string }>;
      loadLayoutConfig: () => Promise<{ success: boolean; config?: layoutConfig; error?: string }>;
      
      saveJson: (filePath: string, jsonData: string) => Promise<{ success: boolean; error?: string }>;
      onWindowCloseAttempt: (callback: () => void) => void;
      sendCloseResponse: (isDirty: boolean) => void;
      onTriggerDownload: (callback: () => void) => void;
    };
  }
  
  // Add interface definition if not already defined elsewhere
  interface layoutConfig {
    preset?: string;
    primary?: string;
    surface?: string | undefined | null;
    darkTheme?: boolean;
    menuMode?: string;
  }
}