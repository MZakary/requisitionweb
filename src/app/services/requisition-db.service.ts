import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RequisitionDbService {

  async getAll(): Promise<ProjetRow[]> {
    return (window as any).electronAPI.getAllProjects(); // IPC call
  }

  async search(term: string): Promise<ProjetRow[]> {
    return (window as any).electronAPI.searchProjects(term);
  }

  async getByType(type: string): Promise<ProjetRow[]> {
    return (window as any).electronAPI.getProjectsByType(type);
  }

  async uploadToDB(projet: ProjetRow): Promise<boolean> {
    return (window as any).electronAPI.uploadProject(projet); // Placeholder for actual IPC call
  }

  async updateInDB(projet: ProjetRow): Promise<boolean> {
    return (window as any).electronAPI.updateProject(projet);
  }

  async findProject(requisitionNum: string, phaseNum: number): Promise<ProjetRow | null> {
    return (window as any).electronAPI.findProject(requisitionNum, phaseNum);
  }

}