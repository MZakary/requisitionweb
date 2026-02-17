// project-upload.service.ts
import { Injectable } from '@angular/core';
import { RequisitionDbService } from './requisition-db.service';
import { ProjectMapperService } from './project-mapper.service';

// project-upload.service.ts
@Injectable({ providedIn: 'root' })
export class ProjectUploadService {

  constructor(
    private requisitionDbService: RequisitionDbService,
    private projectMapper: ProjectMapperService
  ) {}

  async uploadProjects(
    formValue: any, 
    phases: any[], 
    needsPhase: boolean,
    requisitionType: string
  ): Promise<{ success: boolean; message: string; updatedPhases: any[] }> {
    try {
      const updatedPhases = [...phases];
      
      if (needsPhase && phases.length > 0) {
        await this.uploadOrUpdatePhases(formValue, phases, updatedPhases, requisitionType);
      } else {
        await this.uploadRequisition(formValue, requisitionType);
      }
      
      return { 
        success: true, 
        message: 'Projects synchronized successfully',
        updatedPhases: updatedPhases
      };
    } catch (error) {
      console.error('Upload error:', error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Unknown upload error',
        updatedPhases: phases
      };
    }
  }

  private async uploadOrUpdatePhases(
    formValue: any, 
    phases: any[], 
    updatedPhases: any[],
    requisitionType: string
  ): Promise<void> {
    for (let i = 0; i < phases.length; i++) {
      const phase = phases[i];
      
      const project = this.projectMapper.createProjectFromPhase(
        formValue, 
        phase, 
        i + 1, 
        requisitionType
      );
      
      let success = false;
      
      if (phase.needsUpdate) {
        // Phase needs update → UPDATE
        console.log(`Phase ${i + 1} needs update, updating...`);
        success = await this.requisitionDbService.updateInDB(project);
        if (success) {
          // Clear the needsUpdate flag after successful update
          updatedPhases[i] = { ...phase, uploaded: true, needsUpdate: false };
        }
      } else if (!phase.uploaded) {
        // New phase → INSERT
        console.log(`Phase ${i + 1} is new, inserting...`);
        success = await this.requisitionDbService.uploadToDB(project);
        if (success) {
          updatedPhases[i] = { ...phase, uploaded: true, needsUpdate: false };
        }
      } else {
        console.log(`Phase ${i + 1} already uploaded and up to date, skipping`);
        updatedPhases[i] = phase; // Keep as is
        continue;
      }
      
      if (success) {
        console.log(`Phase ${i + 1} synchronized successfully`);
      } else {
        throw new Error(`Failed to sync phase ${i + 1}`);
      }
    }
  }

  private async uploadRequisition(
    formValue: any, 
    requisitionType: string
  ): Promise<void> {
    // Similar logic for non-phase requisitions
    const project = this.projectMapper.createProjectFromRequisition(
      formValue, 
      requisitionType
    );
    
    const success = await this.requisitionDbService.uploadToDB(project);
    
    if (!success) {
      throw new Error('Failed to upload requisition as project');
    }
  }
}