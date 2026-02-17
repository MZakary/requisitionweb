// project-upload.service.ts
import { Injectable } from '@angular/core';
import { RequisitionDbService } from './requisition-db.service';
import { ProjectMapperService } from './project-mapper.service';

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
      const updatedPhases = [...phases]; // Create a copy to modify
      
      if (needsPhase && phases.length > 0) {
        await this.uploadPhases(formValue, phases, updatedPhases, requisitionType);
      } else {
        await this.uploadRequisition(formValue, requisitionType);
      }
      
      return { 
        success: true, 
        message: 'Projects uploaded successfully',
        updatedPhases: updatedPhases
      };
    } catch (error) {
      console.error('Upload error:', error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Unknown upload error',
        updatedPhases: phases // Return original phases on error
      };
    }
  }

  private async uploadPhases(
    formValue: any, 
    phases: any[], 
    updatedPhases: any[],
    requisitionType: string
  ): Promise<void> {
    for (let i = 0; i < phases.length; i++) {
      const phase = phases[i];
      
      // Only upload if not already uploaded
      if (!phase.uploaded) {
        const project = this.projectMapper.createProjectFromPhase(
          formValue, 
          phase, 
          i + 1, 
          requisitionType
        );
        
        const success = await this.requisitionDbService.uploadToDB(project);
        
        if (success) {
          // Mark as uploaded in our copy
          updatedPhases[i] = { ...phase, uploaded: true };
          console.log(`Phase ${i + 1} uploaded successfully`);
        } else {
          throw new Error(`Failed to upload phase ${i + 1}`);
        }
      } else {
        console.log(`Phase ${i + 1} already uploaded, skipping`);
      }
    }
  }

  private async uploadRequisition(
    formValue: any, 
    requisitionType: string
  ): Promise<void> {
    // For non-phase requisitions, you might want to check if it's already uploaded
    // You could add an 'uploaded' flag at the root level for these types
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