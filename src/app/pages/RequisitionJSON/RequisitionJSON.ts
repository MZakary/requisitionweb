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

interface RequisitionPhase {
  selectedTypes: string[];
  etext?: { [key: string]: any };
  braille?: { [key: string]: any };
  audio?: { [key: string]: any };
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

  needsPhase: boolean = true;

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
  Fonctions pour tous ce qui est les types de productions
  ---------------------------------------------------------------------------
  */
  productionTypes = productionFields;

  get phases(): FormArray {
    return this.form.get('phases') as FormArray;
  }

  addPhase(): void {
    const phaseGroup = this.fb.group({
      selectedTypes: this.fb.control([]), // selected production types
      etext: this.buildProductionGroup(eTextFormFields),
      braille: this.buildProductionGroup(brailleFormFields),
      audio: this.fb.group({}) // you can load audioFormFields here
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
      }
      else {
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        
        // Patch main form
        this.form.patchValue(data, { emitEvent: false });

        // Handle phases
        if (data.phases && Array.isArray(data.phases)) {
          const phasesArray = this.form.get('phases') as FormArray;
          phasesArray.clear();

          data.phases.forEach((phaseData: any) => {
            const phaseGroup = this.fb.group({
              selectedTypes: [[]],
              etext: this.buildProductionGroup(eTextFormFields),
              braille: this.buildProductionGroup(brailleFormFields),
              audio: this.fb.group({})
            });

            // Special handling for checkbox lists in phases
            if (phaseData.braille?.accessOptions) {
              const brailleGroup = phaseGroup.get('braille') as FormGroup;
              if (brailleGroup) {
                const accessOptions = brailleGroup.get('accessOptions') as FormGroup;
                if (accessOptions) {
                  Object.keys(phaseData.braille.accessOptions).forEach(key => {
                    if (accessOptions.get(key)) {
                      accessOptions.get(key)?.setValue(phaseData.braille.accessOptions[key]);
                    }
                  });
                }
              }
            }

            phaseGroup.patchValue(phaseData, { emitEvent: false });
            phasesArray.push(phaseGroup);
          });
        }
      } catch (err) {
        console.error('Error loading file:', err);
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
