import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  AbstractControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';

//Requisition imports
import { externeFormFields } from '../../../requisition-questions/externe-form-definition';
import { interneFormFields } from '../../../requisition-questions/interne-form-definition';
import { scolaireFormFields } from '../../../requisition-questions/scolaire-form-definition';
import { servicesFormFields } from '../../../requisition-questions/services-form-definition';
import { banqFormFields } from '../../../requisition-questions/banq-form-definition';
import { hydroqcFormFields } from '../../../requisition-questions/hydroQC-form-definition';
import { materielFormFields } from '../../../requisition-questions/materiel-form-definition';

//Production imports
import { eTextFormFields } from '../../../requisition-questions/shared/eText-form-definition';
import { brailleFormFields } from '../../../requisition-questions/shared/braille-form-definition';
import { grossiFormFields } from '../../../requisition-questions/shared/grossi-form-definition';
import { agrandisFormFields } from '../../../requisition-questions/shared/agrandis-form-definition'; // Exemple, ajoute tes fichiers
import { numerisationFormFields } from '../../../requisition-questions/shared/numerisation-form-definition';
import { pdfFormFields } from '../../../requisition-questions/shared/pdf-form-definition';
import { htmlFormFields } from '../../../requisition-questions/shared/html-form-definition';
import { formulaireFormFields } from '../../../requisition-questions/shared/formulaire-form-definition';  
// import { audioFormFields } from '../../../requisition-questions/shared/audio-form-definition'; // Exemple, ajoute tes fichiers
// import { threeDFormFields } from '../../../requisition-questions/shared/threeD-form-definition'; // Exemple

import { productionFields } from '../../../requisition-questions/shared/productionFields';

enum RequisitionType {
  Externe = 'externe pour adaptation',
  Interne = 'interne pour adaptation',
  Scholaire = 'scolaire pour adaptation',
  Services = 'services conseils en accessibilité',
  BANQ = 'BANQ',
  Materiel = 'matériel 3D pour adaptation',
  HydroQC = 'Hydro-Québec',
  Unknown = 'Inconnue',
}

@Component({
  selector: 'app-requisition-json',
  templateUrl: './RequisitionJSON.html',
  styleUrls: ['./RequisitionJSON.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    FloatLabelModule,
    ButtonModule,
    TextareaModule,
    MultiSelectModule,
  ],
})
export class RequisitionJSON implements OnInit, AfterViewInit {
  @ViewChild('pageTitle') pageTitle!: ElementRef;

  requisitionType: RequisitionType = RequisitionType.Unknown;
  form!: FormGroup;
  formFields: any[] = [];
  eTextFormFields = eTextFormFields;
  brailleFormFields = brailleFormFields;
  grossiFormFields = grossiFormFields;
  agrandisFormFields = agrandisFormFields;
  numerisationFormFields = numerisationFormFields;
  pdfFormFields = pdfFormFields;
  htmlFormFields = htmlFormFields;
  formulaireFormFields = formulaireFormFields;

  needsPhase: boolean = true;
  productionTypes = productionFields;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.detectRequisitionType();
    this.buildFormFields();
    this.buildFormGroup();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pageTitle.nativeElement.focus();
    }, 0);
  }


  /*
  ---------------------------------------------------------------------------
  Fonction pour détecter le type de réquisition en fonction de l'URL
  ---------------------------------------------------------------------------
  */
  private detectRequisitionType(): void {
    const url = this.router.url;
    if (url.includes('/requisition-json-externe')) {
      this.requisitionType = RequisitionType.Externe;
    } else if (url.includes('/requisition-json-interne')) {
      this.requisitionType = RequisitionType.Interne;
    } else if (url.includes('/requisition-json-scolaire')) {
      this.requisitionType = RequisitionType.Scholaire;
    } else if (url.includes('/requisition-json-services')) {
      this.requisitionType = RequisitionType.Services;
      this.needsPhase = false; // Services requisition does not need phases
    } else if (url.includes('/requisition-json-banq')) {
      this.requisitionType = RequisitionType.BANQ;
    } else if (url.includes('/requisition-json-hydroqc')) {
      this.requisitionType = RequisitionType.HydroQC;
    } else if (url.includes('/requisition-json-materiel')) {
      this.requisitionType = RequisitionType.Materiel;
      this.needsPhase = false; // Materiel requisition does not need phases
    } else {
      this.requisitionType = RequisitionType.Unknown;
    }
  }

  /*
  ---------------------------------------------------------------------------
  Fonction pour construire les champs du formulaire en fonction du type de réquisition
  ---------------------------------------------------------------------------
  */

  private buildFormFields(): void {
    switch (this.requisitionType) {
      case RequisitionType.Externe:
        this.formFields = externeFormFields;
        break;
      case RequisitionType.Interne:
        this.formFields = interneFormFields;
        break;
      case RequisitionType.Scholaire:
        this.formFields = scolaireFormFields;
        break;
      case RequisitionType.Services:
        this.formFields = servicesFormFields;
        break;
      case RequisitionType.BANQ:
        this.formFields = banqFormFields;
        break;
      case RequisitionType.HydroQC:
        this.formFields = hydroqcFormFields;
        break;
      case RequisitionType.Materiel:
        this.formFields = materielFormFields;
        break;
      default:
        this.formFields = [];
        break;
    }
  }

  private buildFormGroup(): void {
    const group: { [key: string]: any } = {};

    // Filter out headers and separators
    const dataFields = this.formFields.filter(field => 
      field.type !== 'header2' && 
      field.type !== 'header3' && 
      field.type !== 'header4' && 
      field.type !== 'hr' &&
      field.key !== '' // Additional check for empty key separators
    );

    dataFields.forEach(field => {
      if (field.type === 'tableHeure') {
        // Create a FormGroup with the column keys
        const tableGroup: { [key: string]: FormControl } = {};
        field.columns.forEach((col: any) => {
          tableGroup[col.key] = new FormControl('');
        });
        group[field.key] = this.fb.group(tableGroup);
      } else if (field.type === 'checkbox-list') {
        // For checkbox lists, create a FormGroup with each option as a FormControl
        const checkboxGroup: { [key: string]: FormControl } = {};
        field.options.forEach((option: any) => {
          checkboxGroup[option.value] = new FormControl(false);
        });
        group[field.key] = this.fb.group(checkboxGroup);
      } else {
        // Handle all other field types with proper default values
        group[field.key] = new FormControl(
          field.type === 'checkbox' ? false : 
          field.type === 'select' ? null : 
          ''
        );
      }
    });

    group['phases'] = this.fb.array([]); // Add dynamic phases
    this.form = this.fb.group(group);
  }

  /*
  ---------------------------------------------------------------------------
  Fonction pour tous ce qui est la table d'heures
  ---------------------------------------------------------------------------
  */
  get totalHeures(): number {
    const tableHeureGroup = this.form.get('tableHeure') as FormGroup;
    if (!tableHeureGroup) return 0;

    let total = 0;
    for (const key of Object.keys(tableHeureGroup.controls)) {
      const val = parseFloat(tableHeureGroup.get(key)?.value);
      if (!isNaN(val)) total += val;
    }
    return total;
  }

  /*
  ---------------------------------------------------------------------------
  Fonctions pour tous ce qui est la table dynamique
  ---------------------------------------------------------------------------
  */

  addTableRow(phase: AbstractControl, type: string, field: any): void {
    const group = this.getNestedGroup(phase, type);
    const array = group.get(field.key) as FormArray;

    const newRow = this.fb.group(
      field.columns.reduce((acc: any, col: any) => {
        acc[col.key] = new FormControl('');
        return acc;
      }, {})
    );

    array.push(newRow);
  }

  removeTableRow(phase: AbstractControl, type: string, key: string, index: number): void {
    const group = this.getNestedGroup(phase, type);
    const array = group.get(key) as FormArray;
    array.removeAt(index);
  }

  getFormArrayFromNestedGroup(phase: AbstractControl, type: string, key: string): FormArray {
    const group = this.getNestedGroup(phase, type);
    const array = group?.get(key);
    if (array instanceof FormArray) {
      return array;
    }
    return this.fb.array([]);
  }

  


  /*
  ---------------------------------------------------------------------------
  Fonctions pour tous ce qui est les types de productions
  ---------------------------------------------------------------------------
  */

  get phases(): FormArray {
    return this.form.get('phases') as FormArray;
  }
  /* ADD PRODUCTIONS HERE */
  addPhase(): void {
    const phaseGroup = this.fb.group({
      selectedTypes: this.fb.control([]), // selected production types
      etext: this.buildProductionGroup(eTextFormFields),
      braille: this.buildProductionGroup(brailleFormFields),
      grossi: this.buildProductionGroup(grossiFormFields),
      agrandis: this.buildProductionGroup(agrandisFormFields), // Example, add your files
      num: this.buildProductionGroup(numerisationFormFields), // Example, add your files
      pdf: this.buildProductionGroup(pdfFormFields), // Example, add your files
      html: this.buildProductionGroup(htmlFormFields), // Example, add your files
      form: this.buildProductionGroup(formulaireFormFields), // Example, add your files
    });

    this.phases.push(phaseGroup);
  }

  private buildProductionGroup(fields: any[]): FormGroup {
    const group: { [key: string]: any } = {};
    
    // Filter out headers (header4) and separators (hr)
    const dataFields = fields.filter(field => 
      field.type !== 'header4' && 
      field.type !== 'hr' &&
      field.key !== '' // Additional check for empty key separators
    );

    dataFields.forEach(field => {
      if (field.type === 'checkbox-list') {
        // Create a FormGroup for checkbox lists
        const checkboxGroup: { [key: string]: FormControl } = {};
        field.options.forEach((option: any) => {
          checkboxGroup[option.value] = new FormControl(false);
        });
        group[field.key] = this.fb.group(checkboxGroup);
      } 
      else if (field.type === 'tableHeure') {
        // Handle time tables
        const tableGroup: { [key: string]: FormControl } = {};
        field.columns.forEach((col: any) => {
          tableGroup[col.key] = new FormControl('');
        });
        group[field.key] = this.fb.group(tableGroup);
      }else if (field.type === 'dynamicTable') {
        const rows = this.fb.array([
          this.fb.group(
            field.columns.reduce((acc: any, col: any) => {
              acc[col.key] = new FormControl('');
              return acc;
            }, {})
          )
        ]);
        group[field.key] = rows;
      }else {
        // Handle all other field types
        group[field.key] = new FormControl(
          field.type === 'checkbox' ? false : 
          field.type === 'select' ? null : 
          ''
        );
      }
    });

    return this.fb.group(group);
  }

  getPhaseGroup(phase: AbstractControl | null): FormGroup {
    return phase as FormGroup;
  }

  getNestedGroup(phase: AbstractControl | null, key: string): FormGroup {
    return this.getPhaseGroup(phase).get(key) as FormGroup;
  }

  onProductionTypeToggle(phaseIndex: number, value: string): void {
    const selectedTypesControl = this.phases.at(phaseIndex).get('selectedTypes');
    if (!selectedTypesControl) return;

    const selectedTypes = selectedTypesControl.value as string[] || [];

    if (selectedTypes.includes(value)) {
      selectedTypesControl.setValue(selectedTypes.filter(v => v !== value));
    } else {
      selectedTypesControl.setValue([...selectedTypes, value]);
    }
  }

  deletePhase(index: number): void {
    this.phases.removeAt(index);
  }



  /*
  ---------------------------------------------------------------------------
  Fonction pour importer et exporter un fichier JSON
  ---------------------------------------------------------------------------
  */

  private getFieldDefByType(type: string): any[] {
    switch (type) {
      case 'etext': return this.eTextFormFields;
      case 'braille': return this.brailleFormFields;
      case 'grossi': return this.grossiFormFields;
      case 'agrandis': return this.agrandisFormFields;
      case 'num': return this.numerisationFormFields; // Example, add your files
      case 'pdf': return this.pdfFormFields; // Example, add your files
      case 'html': return this.htmlFormFields; // Example, add your files
      case 'form': return this.formulaireFormFields; // Example, add your files
      default: return [];
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);

        // Patch base form values (excluding phases)
        const patchableData = { ...data };
        delete patchableData.phases;
        this.form.patchValue(patchableData, { emitEvent: false });

        // Handle dynamic phases
        if (Array.isArray(data.phases)) {
          const phasesArray = this.form.get('phases') as FormArray;
          phasesArray.clear();

          data.phases.forEach((phaseData: any) => {
            const phaseGroup = this.fb.group({
              selectedTypes: [[]],
              etext: this.buildProductionGroup(eTextFormFields),
              braille: this.buildProductionGroup(brailleFormFields),
              grossi: this.buildProductionGroup(grossiFormFields),
              agrandis: this.buildProductionGroup(agrandisFormFields),
              num: this.buildProductionGroup(numerisationFormFields), // Example, add your files
              pdf: this.buildProductionGroup(pdfFormFields), // Example, add your files
              html: this.buildProductionGroup(htmlFormFields), // Example, add your files
              form: this.buildProductionGroup(formulaireFormFields), // Example, add your files
            });

            // 🧠 Handle dynamicTable
            for (const typeKey of Object.keys(phaseData)) {
              const sectionData = phaseData[typeKey];
              const sectionDef = this.getFieldDefByType(typeKey);
              const sectionGroup = phaseGroup.get(typeKey) as FormGroup;

              if (sectionData && sectionDef && sectionGroup) {
                for (const field of sectionDef) {
                  if (field.type === 'dynamicTable' && Array.isArray(sectionData[field.key])) {
                    const formArray = sectionGroup.get(field.key) as FormArray;
                    formArray.clear(); // Remove default row

                    sectionData[field.key].forEach((row: any) => {
                      const rowGroup = this.fb.group(
                        field.columns.reduce((acc: any, col: any) => {
                          acc[col.key] = new FormControl(row[col.key] ?? '');
                          return acc;
                        }, {})
                      );
                      formArray.push(rowGroup);
                    });
                  }
                }
              }
            }
            // Patch remaining values
            phaseGroup.patchValue(phaseData, { emitEvent: false });
            phasesArray.push(phaseGroup);
          });
        }
      } catch (err) {
        console.error('Error loading JSON file:', err);
        alert('Invalid JSON file format');
      }
    };
    reader.readAsText(file);
  }


  downloadJson() {
    const data = this.form.value;
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'requisition.json';
    a.click();
    URL.revokeObjectURL(url);
  }
}
