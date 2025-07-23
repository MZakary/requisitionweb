export {}; // Marks this file as a module

declare global {
  interface Window {
    electronAPI: {
      openFileDialog: () => Promise<string>;
      lockFile: (filePath: string) => Promise<any>;
      unlockFile: (filePath: string) => Promise<any>;
      checkLock: (filePath: string) => Promise<any>;

      onWindowCloseAttempt: (callback: () => void) => void;
      sendCloseResponse: (isDirty: boolean) => void;

      onTriggerDownload: (callback: () => void) => void;
    };
  }
}
