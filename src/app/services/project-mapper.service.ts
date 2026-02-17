// src/app/services/project-mapper.service.ts
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ProjectMapperService {
  
  createProjectFromPhase(
    formValue: any, 
    phase: any, 
    phaseNumber: number, 
    requisitionType: string
  ): ProjetRow {
    return {
      Id: 0,
      Statut: 'Nouveau',
      NumRequisition: formValue.numeroRequisition || '',
      NumPOBCDDT: formValue.numeroPOBCDDT || 0,
      SessionEtude: formValue.sessionEtude || '',
      DateDemande: formValue.dateDemande || new Date().toISOString().split('T')[0],
      PeriodeFinanciereDemande: formValue.periodeFinanciereDemande || '',
      TypeClient: formValue.typeClient || requisitionType,
      Client: formValue.nomClient || formValue.nomClientScolaire || '',
      SousCentreActivite: formValue.sousCentreActivite || '',
      NomContact: formValue.nomContact || '',
      NomProjet: this.generateProjectName(formValue, phase, phaseNumber),
      TypeProdDemande: phase.selectedTypes?.join(', ') || '',
      NumFichier: this.extractFileName(phase),
      DateRequise: formValue.dateRequise || '',
      NoPhase: phaseNumber,
      NoPageImprimer: 0,
      Complexite: this.extractComplexity(phase),
      TechMulti: '',
      DateTermineMulti: '',
      HeureTravailleMulti: 0,
      TechTactile: '',
      DateTermineTactile: '',
      HeureTravailleTactile: 0,
      TotalHeureTravaille: this.calculateTotalHours(phase),
      ProdPagesBrailleAbrege: this.getBraillePageCount(phase, 'abrege'),
      ProdPagesBrailleIntegral: this.getBraillePageCount(phase, 'integral'),
      NoVolBraille: 0,
      NoCarETextOuAgrandi: this.getETextPageCount(phase),
      NoPageCarAgrandis: this.getAgrandisPageCount(phase),
      NoDessinStandards: this.getDessinCount(phase, 'standard'),
      NoDessinComplexes: this.getDessinCount(phase, 'complexe'),
      NoPagesDessins: this.getTotalDessinPages(phase),
      NoPagesAgrandisNumPDF: this.getPDFPageCount(phase),
      NoPDFHTMLFORM: this.getHTMLFormCount(phase),
      NoSonore: this.getSonoreCount(phase),
      No3D: this.get3DCount(phase),
      NoQuantite: this.getTotalQuantity(phase),
      DateLivraison: '',
      PeriodeFinLivraison: '',
      TotalFacture: 0,
      PrixCalcul: 0,
      DateFacture: '',
      PeriodeFinanciereFacture: 0,
      NoFacture: '',
      MontantFactCISSSMC: 0,
      Commentaire: phase.commentaire || ''
    };
  }

  createProjectFromRequisition(formValue: any, requisitionType: string): ProjetRow {
    return {
      Id: 0,
      Statut: 'Nouveau',
      NumRequisition: formValue.numeroRequisition || '',
      NumPOBCDDT: formValue.numeroPOBCDDT || 0,
      SessionEtude: formValue.sessionEtude || '',
      DateDemande: formValue.dateDemande || new Date().toISOString().split('T')[0],
      PeriodeFinanciereDemande: formValue.periodeFinanciereDemande || '',
      TypeClient: formValue.typeClient || requisitionType,
      Client: formValue.nomClient || formValue.nomClientScolaire || '',
      SousCentreActivite: formValue.sousCentreActivite || '',
      NomContact: formValue.nomContact || '',
      NomProjet: `${formValue.numeroRequisition || 'Réquisition'} - ${formValue.description || ''}`,
      TypeProdDemande: requisitionType,
      NumFichier: formValue.numFichier || '',
      DateRequise: formValue.dateRequise || '',
      NoPhase: 0,
      NoPageImprimer: 0,
      Complexite: formValue.niveauDifficulte || '',
      TechMulti: '',
      DateTermineMulti: '',
      HeureTravailleMulti: 0,
      TechTactile: '',
      DateTermineTactile: '',
      HeureTravailleTactile: 0,
      TotalHeureTravaille: this.calculateTotalHoursFromRequisition(formValue),
      ProdPagesBrailleAbrege: 0,
      ProdPagesBrailleIntegral: 0,
      NoVolBraille: 0,
      NoCarETextOuAgrandi: 0,
      NoPageCarAgrandis: 0,
      NoDessinStandards: 0,
      NoDessinComplexes: 0,
      NoPagesDessins: 0,
      NoPagesAgrandisNumPDF: 0,
      NoPDFHTMLFORM: 0,
      NoSonore: 0,
      No3D: formValue.quantite || 0,
      NoQuantite: formValue.quantite || 0,
      DateLivraison: '',
      PeriodeFinLivraison: '',
      TotalFacture: 0,
      PrixCalcul: 0,
      DateFacture: '',
      PeriodeFinanciereFacture: 0,
      NoFacture: '',
      MontantFactCISSSMC: 0,
      Commentaire: formValue.commentaire || ''
    };
  }

  generatePhaseId(formValue: any, phaseIndex: number, phase: any): string {
    const requisitionNum = formValue.numeroRequisition || 'new';
    const phaseTypes = phase.selectedTypes?.join('-') || 'unknown';
    return `${requisitionNum}-phase-${phaseIndex}-${phaseTypes}`;
  }

  generateRequisitionId(formValue: any): string {
    return formValue.numeroRequisition || `new-${Date.now()}`;
  }

  private generateProjectName(formValue: any, phase: any, phaseNumber: number): string {
    const requisitionNum = formValue.numeroRequisition || 'Nouvelle';
    const phaseTypes = phase.selectedTypes?.join(' & ') || 'Production';
    return `Phase ${phaseNumber}: ${phaseTypes} - ${requisitionNum}`;
  }

  private extractFileName(phase: any): string {
    const productionTypes = ['etext', 'braille', 'grossi', 'agrandis', 'pdf', 'html', 'formulaire', 'dessin'];
    
    for (const type of productionTypes) {
      if (phase.selectedTypes?.includes(type) && phase[type]?.noFichier) {
        return phase[type].noFichier;
      }
    }
    return '';
  }

  private extractComplexity(phase: any): string {
    const complexityFields = ['niveauDifficulteEtext', 'niveauDifficulteBraille', 'niveauDifficulteGrossi', 
                              'niveauDifficulteDessin', 'niveauDifficultePDF', 'niveauDifficulteFormulaire'];
    
    for (const type of (phase.selectedTypes || [])) {
      const phaseGroup = phase[type];
      if (phaseGroup) {
        for (const field of complexityFields) {
          if (phaseGroup[field]) {
            return phaseGroup[field];
          }
        }
      }
    }
    return '';
  }

  private calculateTotalHours(phase: any): number {
    let total = 0;
    for (const type of (phase.selectedTypes || [])) {
      const phaseGroup = phase[type];
      if (phaseGroup?.tableHeure) {
        phaseGroup.tableHeure.forEach((row: any) => {
          Object.keys(row).forEach(key => {
            if (key.includes('Heure') || key === 'sousTotal') {
              total += Number(row[key]) || 0;
            }
          });
        });
      }
    }
    return total;
  }

  private calculateTotalHoursFromRequisition(formValue: any): number {
    const tableHeure = formValue.tableHeure;
    let total = 0;
    
    if (Array.isArray(tableHeure)) {
      tableHeure.forEach((row: any) => {
        Object.keys(row).forEach(key => {
          if (key.includes('Heure') || key === 'sousTotal') {
            total += Number(row[key]) || 0;
          }
        });
      });
    }
    return total;
  }

  private getBraillePageCount(phase: any, type: 'abrege' | 'integral'): number {
    const brailleTypes = ['braille', 'brailleBANQ', 'brailleBANQ2', 'brailleDuoMedia', 'brailleHYDROQC'];
    
    for (const brailleType of brailleTypes) {
      if (phase.selectedTypes?.includes(brailleType) && phase[brailleType]) {
        const group = phase[brailleType];
        if (type === 'abrege') {
          return Number(group.prodPagesBrailleAbrege) || 
                 Number(group.nbsPageProdBrailleBA) || 
                 0;
        } else {
          return Number(group.prodPagesBrailleIntegral) || 
                 Number(group.nbsPageProdBrailleBI) || 
                 0;
        }
      }
    }
    return 0;
  }

  private getETextPageCount(phase: any): number {
    if (phase.selectedTypes?.includes('etext') && phase.etext?.tableauProductionEText) {
      return phase.etext.tableauProductionEText.reduce((sum: number, row: any) => {
        return sum + (Number(row.nbsPageProdEText) || 0);
      }, 0);
    }
    return 0;
  }

  private getAgrandisPageCount(phase: any): number {
    // Implement based on your agrandis structure
    return 0;
  }

  private getDessinCount(phase: any, type: 'standard' | 'complexe'): number {
    // Implement based on your dessin structure
    return 0;
  }

  private getTotalDessinPages(phase: any): number {
    // Implement based on your dessin structure
    return 0;
  }

  private getPDFPageCount(phase: any): number {
    // Implement based on your PDF structure
    return 0;
  }

  private getHTMLFormCount(phase: any): number {
    // Implement based on your HTML/Form structure
    return 0;
  }

  private getSonoreCount(phase: any): number {
    // Implement based on your sonore structure
    return 0;
  }

  private get3DCount(phase: any): number {
    // Implement based on your 3D structure
    return 0;
  }

  private getTotalQuantity(phase: any): number {
    let total = 0;
    for (const type of (phase.selectedTypes || [])) {
      const phaseGroup = phase[type];
      if (phaseGroup?.quantite) {
        total += Number(phaseGroup.quantite) || 0;
      }
    }
    return total;
  }
}