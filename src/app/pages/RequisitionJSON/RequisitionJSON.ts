import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, ChangeDetectorRef, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';
import { CanComponentDeactivate } from '../Guard/confirm-exit.guard';

//Requisition imports
import { externeFormFields, externeFormFieldsAfterPhases } from '../../../requisition-questions/externe-form-definition';
import { interneFormFields, interneFormFieldsAfterPhases } from '../../../requisition-questions/interne-form-definition';
import { scolaireFormFields, scolaireFormFieldsAfterPhases } from '../../../requisition-questions/scolaire-form-definition';
import { servicesFormFields, servicesFormFieldsAfterPhases } from '../../../requisition-questions/services-form-definition';
import { banqFormFields, banqFormFieldsAfterPhases } from '../../../requisition-questions/banq-form-definition';
import { hydroqcFormFields, hydroqcFormFieldsAfterPhases } from '../../../requisition-questions/hydroQC-form-definition';
import { materielFormFields, materielFormFieldsAfterPhases } from '../../../requisition-questions/materiel-form-definition';

//Production imports
import { eTextFormFields } from '../../../requisition-questions/shared/eText-form-definition';
import { brailleFormFields } from '../../../requisition-questions/shared/braille-form-definition';
import { grossiFormFields } from '../../../requisition-questions/shared/grossi-form-definition';
import { agrandisFormFields } from '../../../requisition-questions/shared/agrandis-form-definition'; // Exemple, ajoute tes fichiers
import { numerisationFormFields } from '../../../requisition-questions/shared/numerisation-form-definition';
import { pdfFormFields } from '../../../requisition-questions/shared/pdf-form-definition';
import { htmlFormFields } from '../../../requisition-questions/shared/html-form-definition';
import { formulaireFormFields } from '../../../requisition-questions/shared/formulaire-form-definition';
import { dessinFormFields } from '../../../requisition-questions/shared/dessin-form-definition';
import { sonoreFormFields } from '../../../requisition-questions/shared/sonore-form-definition';
import { autreFormFields } from '../../../requisition-questions/shared/autre-form-definition';
import { brailleBANQBIBAFormFields, brailleBANQBIOUBAFormFields } from '../../../requisition-questions/shared/brailleBANQBIBA-form-definition';
import { brailleDuoMediaBANQFormFields } from '../../../requisition-questions/shared/brailleDuoMediaBANQ-form-definition';
import { brailleHYDROQCFormFields } from '../../../requisition-questions/shared/brailleHYDROQC-form-definition';
import { grossiHYDROQCFormFields } from '../../../requisition-questions/shared/grossiHYDROQC-form-definition';

import { productionFields } from '../../../requisition-questions/shared/productionFields';
import { productionFieldsBANQ } from '../../../requisition-questions/shared/productionFieldsBANQ';
import { productionFieldsHYDRO } from '../../../requisition-questions/shared/productionFieldsHYDROQC';


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
export class RequisitionJSON implements OnInit, AfterViewInit, CanComponentDeactivate, OnDestroy {
  @ViewChild('pageTitle') pageTitle!: ElementRef;
  @ViewChildren('phaseTitle') phaseTitles!: QueryList<ElementRef>;
  //@ViewChild('phaseAnnounce') phaseAnnounce!: ElementRef;

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
  dessinFormFields = dessinFormFields;
  sonoreFormFields = sonoreFormFields;
  autreFormFields = autreFormFields;
  brailleBANQBIBAFormFields = brailleBANQBIBAFormFields;
  brailleDuoMediaBANQFormFields = brailleDuoMediaBANQFormFields;
  brailleHYDROQCFormFields = brailleHYDROQCFormFields;
  grossiHYDROQCFormFields = grossiHYDROQCFormFields;
  brailleBANQBIOUBAFormFields = brailleBANQBIOUBAFormFields;

  needsPhase: boolean = true;
  productionTypes = productionFields;

  lockedFilePath: string | null = null;

  constructor(private router: Router, private fb: FormBuilder, private cd: ChangeDetectorRef) { }

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
      this.productionTypes = productionFieldsBANQ;
    } else if (url.includes('/requisition-json-hydroqc')) {
      this.requisitionType = RequisitionType.HydroQC;
      this.productionTypes = productionFieldsHYDRO;
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
        this.formFields = [
          ...externeFormFields,
          { key: 'phases', type: 'phases' }, // Add marker to split before/after
          ...externeFormFieldsAfterPhases
        ];
        break;
      case RequisitionType.Interne:
        this.formFields = [
          ...interneFormFields,
          { key: 'phases', type: 'phases' }, // Add marker to split before/after
          ...interneFormFieldsAfterPhases
        ];
        break;
      case RequisitionType.Scholaire:
        this.formFields = [
          ...scolaireFormFields,
          { key: 'phases', type: 'phases' }, // Add marker to split before/after
          ...scolaireFormFieldsAfterPhases
        ];
        break;
      case RequisitionType.Services:
        this.formFields = [
          ...servicesFormFields,
          { key: 'phases', type: 'phases' }, // Add marker to split before/after
          ...servicesFormFieldsAfterPhases
        ];
        break;
      case RequisitionType.BANQ:
        this.formFields = [
          ...banqFormFields,
          { key: 'phases', type: 'phases' }, // Add marker to split before/after
          ...banqFormFieldsAfterPhases
        ];
        break;
      case RequisitionType.HydroQC:
        this.formFields = [
          ...hydroqcFormFields,
          { key: 'phases', type: 'phases' }, // Add marker to split before/after
          ...hydroqcFormFieldsAfterPhases
        ];
        break;
      case RequisitionType.Materiel:
        this.formFields = [
          ...materielFormFields,
          { key: 'phases', type: 'phases' }, // Add marker to split before/after
          ...materielFormFieldsAfterPhases
        ];
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
        const rows = this.fb.array([
          this.fb.group(
            field.columns.reduce((acc: any, col: any) => {
              acc[col.key] = new FormControl('');
              return acc;
            }, {})
          )
        ]);
        group[field.key] = rows;
      } else if (field.type === 'checkbox-list') {
        // For checkbox lists, create a FormGroup with each option as a FormControl
        const checkboxGroup: { [key: string]: FormControl } = {};
        const defaults = field.defaultValue || [];
        field.options.forEach((option: any) => {
          checkboxGroup[option.value] = new FormControl(defaults.includes(option.value));
        });

        group[field.key] = this.fb.group(checkboxGroup);
      } else if (field.type === 'dynamicTable' || field.type === 'facturationTable') {
        const defaultValues = field.defaultValues || {};
        const defaultRowCount = field.defaultRowCount || 1;

        const rows = this.fb.array(
          Array.from({ length: defaultRowCount }).map((_, rowIndex) => {
            const rowDefaultValues = defaultValues[rowIndex] || {};
            const groupControls = field.columns.reduce((acc: any, col: any) => {
              acc[col.key] = new FormControl(rowDefaultValues[col.key] ?? '');
              return acc;
            }, {});
            return this.fb.group(groupControls);
          })
        );

        group[field.key] = rows;
      } else {
        // Handle all other field types with proper default values
        const defaultValue =
          field.defaultValue !== undefined
            ? field.defaultValue
            : field.type === 'checkbox'
              ? false
              : field.type === 'select'
                ? null
                : '';

        group[field.key] = new FormControl(defaultValue);

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

  totalHeuresValue = 0;

  calculateTotalHeures(): void {
    const tableHeureArray = this.form.get('tableHeure') as FormArray;
    if (!tableHeureArray) {
      console.log('Table d\'heures non trouvée');
      this.totalHeuresValue = 0;
      return;
    }

    let total = 0;
    for (const rowGroup of tableHeureArray.controls) {
      if (rowGroup instanceof FormGroup) {
        for (const key of Object.keys(rowGroup.controls)) {
          // Skip keys containing 'Debut' or 'Fin'
          if (key.includes('Debut') || key.includes('Fin')) continue;

          const val = parseFloat(rowGroup.get(key)?.value);
          if (!isNaN(val)) total += val;
        }
      }
    }

    this.totalHeuresValue = total;
  }

  getTableHeureArray(key: string): FormArray {
    return this.form.get(key) as FormArray;
  }

  addTableHeureRow(field: any): void {
    const array = this.getTableHeureArray(field.key);
    const newRow = this.fb.group(
      field.columns.reduce((acc: any, col: any) => {
        acc[col.key] = new FormControl('');
        return acc;
      }, {})
    );
    array.push(newRow);
  }

  removeTableHeureRow(key: string, index: number): void {
    const array = this.getTableHeureArray(key);
    array.removeAt(index);
  }


  /*
  ---------------------------------------------------------------------------
  Fonctions pour tous ce qui est la table dynamique
  ---------------------------------------------------------------------------
  */

  getTopLevelDynamicTableArray(key: string): FormArray {
    return this.form.get(key) as FormArray;
  }

  addTopLevelTableRow(field: any): void {
    const array = this.getTopLevelDynamicTableArray(field.key);
    const defaultValues = field.defaultValues || {};
    const nextRowIndex = array.length;
    const rowDefaultValues = defaultValues[nextRowIndex] || defaultValues[0] || {};

    const newRow = this.fb.group(
      field.columns.reduce((acc: any, col: any) => {
        acc[col.key] = new FormControl(rowDefaultValues[col.key] ?? '');
        return acc;
      }, {})
    );
    array.push(newRow);

  }

  removeTopLevelTableRow(key: string, index: number): void {
    const array = this.getTopLevelDynamicTableArray(key);
    array.removeAt(index);
  }

  addTableRow(phase: AbstractControl, type: string, field: any): void {
    const group = this.getNestedGroup(phase, type);
    const array = group.get(field.key) as FormArray;

    const defaultValues = field.defaultValues || {};
    const nextRowIndex = array.length;
    const rowDefaultValues = defaultValues[nextRowIndex] || defaultValues[0] || {};

    const newRow = this.fb.group(
      field.columns.reduce((acc: any, col: any) => {
        acc[col.key] = new FormControl(rowDefaultValues[col.key] ?? '');
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
      dessin: this.buildProductionGroup(dessinFormFields), // Example, add your files
      sonore: this.buildProductionGroup(sonoreFormFields), // Example, add your files
      autre: this.buildProductionGroup(autreFormFields), // Example, add your files
      brailleBANQ: this.buildProductionGroup(brailleBANQBIBAFormFields),
      brailleBANQ2: this.buildProductionGroup(brailleBANQBIOUBAFormFields),
      brailleDuoMedia: this.buildProductionGroup(brailleDuoMediaBANQFormFields),
      brailleHYDROQC: this.buildProductionGroup(brailleHYDROQCFormFields),
      grossiHYDROQC: this.buildProductionGroup(grossiHYDROQCFormFields),

    });

    this.phases.push(phaseGroup);

    // ⚠️ Donne le temps à Angular de rendre la nouvelle phase avant d’y mettre le focus
    setTimeout(() => {
      const lastTitle = this.phaseTitles.last;
      if (lastTitle) {
        lastTitle.nativeElement.focus();
        //lastTitle.nativeElement.setAttribute('aria-label', `Phase ${this.phases.length}`);
      }

    }, 300); // petite pause pour garantir le rendu
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
        const defaults = field.defaultValue || [];
        field.options.forEach((option: any) => {
          checkboxGroup[option.value] = new FormControl(defaults.includes(option.value));
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
      } else if (field.type === 'dynamicTable') {
        const defaultValues = field.defaultValues || {};
        const defaultRowCount = field.defaultRowCount || 1;

        const rows = this.fb.array(
          Array.from({ length: defaultRowCount }).map((_, rowIndex) => {
            const rowDefaultValues = defaultValues[rowIndex] || {};
            const groupControls = field.columns.reduce((acc: any, col: any) => {
              acc[col.key] = new FormControl(rowDefaultValues[col.key] ?? '');
              return acc;
            }, {});
            return this.fb.group(groupControls);
          })
        );
        group[field.key] = rows;
      } else {
        // Handle all other field types
        const defaultValue =
          field.defaultValue !== undefined
            ? field.defaultValue
            : field.type === 'checkbox'
              ? false
              : field.type === 'select'
                ? null
                : '';

        group[field.key] = new FormControl(defaultValue);

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

  confirmDeleteIndex: number | null = null;

  confirmDeletePhase(index: number): void {
    this.deletePhase(index);
    this.confirmDeleteIndex = null;
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
      case 'dessin': return this.dessinFormFields; // Example, add your files
      case 'sonore': return this.sonoreFormFields; // Example, add your files
      case 'autre': return this.autreFormFields; // Example, add your files
      case 'brailleBANQ': return this.brailleBANQBIBAFormFields; // Example, add your files
      case 'brailleBANQ2': return this.brailleBANQBIOUBAFormFields; // Example, add your files
      case 'brailleDuoMedia': return this.brailleDuoMediaBANQFormFields; // Example, add your files
      case 'brailleHYDROQC': return this.brailleHYDROQCFormFields; // Example, add your files
      case 'grossiHYDROQC': return this.grossiHYDROQCFormFields; // Example, add your files
      default: return [];
    }
  }

  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (!input.files?.length) return;

  //   const file = input.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     try {
  //       const data = JSON.parse(reader.result as string);

  //       // Patch base form values (excluding phases)
  //       const patchableData = { ...data };
  //       delete patchableData.phases;
  //       this.form.patchValue(patchableData, { emitEvent: false });

  //       // Handle dynamicTable and tableHeure fields outside phases
  //       for (const field of this.formFields) {
  //         if ((field.type === 'dynamicTable' || field.type === 'facturationTable') && Array.isArray(data[field.key])) {
  //           const formArray = this.form.get(field.key) as FormArray;
  //           formArray.clear(); // Clear existing rows

  //           data[field.key].forEach((row: any) => {
  //             const rowGroup = this.fb.group(
  //               field.columns.reduce((acc: any, col: any) => {
  //                 acc[col.key] = new FormControl(row[col.key] ?? '');
  //                 return acc;
  //               }, {})
  //             );
  //             formArray.push(rowGroup);
  //           });
  //         }

  //         // Special handling for tableHeure which is a FormArray (not FormGroup)
  //         if (field.type === 'tableHeure' && Array.isArray(data[field.key])) {
  //           const formArray = this.form.get(field.key) as FormArray;
  //           formArray.clear();

  //           data[field.key].forEach((row: any) => {
  //             const rowGroup = this.fb.group(
  //               field.columns.reduce((acc: any, col: any) => {
  //                 acc[col.key] = new FormControl(row[col.key] ?? '');
  //                 return acc;
  //               }, {})
  //             );
  //             formArray.push(rowGroup);
  //           });
  //         }
  //       }

  //       // Handle dynamic phases
  //       if (Array.isArray(data.phases)) {
  //         const phasesArray = this.form.get('phases') as FormArray;
  //         phasesArray.clear();

  //         data.phases.forEach((phaseData: any) => {
  //           const phaseGroup = this.fb.group({
  //             selectedTypes: [[]],
  //             etext: this.buildProductionGroup(eTextFormFields),
  //             braille: this.buildProductionGroup(brailleFormFields),
  //             grossi: this.buildProductionGroup(grossiFormFields),
  //             agrandis: this.buildProductionGroup(agrandisFormFields),
  //             num: this.buildProductionGroup(numerisationFormFields),
  //             pdf: this.buildProductionGroup(pdfFormFields),
  //             html: this.buildProductionGroup(htmlFormFields),
  //             form: this.buildProductionGroup(formulaireFormFields),
  //             dessin: this.buildProductionGroup(dessinFormFields),
  //             sonore: this.buildProductionGroup(sonoreFormFields),
  //             autre: this.buildProductionGroup(autreFormFields),
  //             brailleBANQ: this.buildProductionGroup(brailleBANQBIBAFormFields),
  //             brailleBANQ2: this.buildProductionGroup(brailleBANQBIOUBAFormFields),
  //             brailleDuoMedia: this.buildProductionGroup(brailleDuoMediaBANQFormFields),
  //             brailleHYDROQC: this.buildProductionGroup(brailleHYDROQCFormFields),
  //             grossiHYDROQC: this.buildProductionGroup(grossiHYDROQCFormFields),
  //           });

  //           // Load dynamic tables inside phases
  //           for (const typeKey of Object.keys(phaseData)) {
  //             const sectionData = phaseData[typeKey];
  //             const sectionDef = this.getFieldDefByType(typeKey);
  //             const sectionGroup = phaseGroup.get(typeKey) as FormGroup;

  //             if (sectionData && sectionDef && sectionGroup) {
  //               for (const field of sectionDef) {
  //                 if (field.type === 'dynamicTable' && Array.isArray(sectionData[field.key])) {
  //                   const formArray = sectionGroup.get(field.key) as FormArray;
  //                   formArray.clear();

  //                   sectionData[field.key].forEach((row: any) => {
  //                     const rowGroup = this.fb.group(
  //                       field.columns.reduce((acc: any, col: any) => {
  //                         acc[col.key] = new FormControl(row[col.key] ?? '');
  //                         return acc;
  //                       }, {})
  //                     );
  //                     formArray.push(rowGroup);
  //                   });
  //                 }

  //                 // If you want to handle tableHeure inside phases similarly, add here if needed
  //               }
  //             }
  //           }

  //           // Patch remaining values on the phaseGroup
  //           phaseGroup.patchValue(phaseData, { emitEvent: false });
  //           phasesArray.push(phaseGroup);
  //         });
  //       }
  //     } catch (err) {
  //       console.error('Error loading JSON file:', err);
  //       alert('Invalid JSON file format');
  //     }
  //   };

  //   reader.readAsText(file);
  // }

  async openAndLockFile(): Promise<void> {
    try {
      const filePath: string = await window.electronAPI.openFileDialog();
      if (!filePath) return;

      // 🔒 Step 1: Check if locked BEFORE locking
      const checkResult = await window.electronAPI.checkLock(filePath);
      if (checkResult.locked) {
        alert(`Ce fichier est déjà utilisé par ${checkResult.lockedBy}.`);
        return;
      }

      // 🔒 Step 2: Lock the file
      const lockResult = await window.electronAPI.lockFile(filePath);
      if (!lockResult.success) {
        alert(`Impossible de verrouiller le fichier. Il est utilisé par ${lockResult.lockedBy}.`);
        return;
      }

      // 📥 Step 3: Read the file contents
      const response = await fetch(`file://${filePath}`);
      const jsonText = await response.text();
      const data = JSON.parse(jsonText);

      this.patchFormFromData(data);
      this.lockedFilePath = filePath;
    } catch (error) {
      console.error('Erreur lors de l’importation du fichier JSON:', error);
      alert('Erreur lors de la lecture ou du verrouillage du fichier.');
    }
  }


  patchFormFromData(data: any): void {
    // Remove phases to patch manually
    const patchableData = { ...data };
    delete patchableData.phases;

    this.form.patchValue(patchableData, { emitEvent: false });

    for (const field of this.formFields) {
      if ((field.type === 'dynamicTable' || field.type === 'facturationTable') && Array.isArray(data[field.key])) {
        const formArray = this.form.get(field.key) as FormArray;
        formArray.clear();

        data[field.key].forEach((row: any) => {
          const rowGroup = this.fb.group(
            field.columns.reduce((acc: any, col: any) => {
              acc[col.key] = new FormControl(row[col.key] ?? '');
              return acc;
            }, {})
          );
          formArray.push(rowGroup);
        });
      }

      if (field.type === 'tableHeure' && Array.isArray(data[field.key])) {
        const formArray = this.form.get(field.key) as FormArray;
        formArray.clear();

        data[field.key].forEach((row: any) => {
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

    // Now handle phases if present
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
          num: this.buildProductionGroup(numerisationFormFields),
          pdf: this.buildProductionGroup(pdfFormFields),
          html: this.buildProductionGroup(htmlFormFields),
          form: this.buildProductionGroup(formulaireFormFields),
          dessin: this.buildProductionGroup(dessinFormFields),
          sonore: this.buildProductionGroup(sonoreFormFields),
          autre: this.buildProductionGroup(autreFormFields),
          brailleBANQ: this.buildProductionGroup(brailleBANQBIBAFormFields),
          brailleBANQ2: this.buildProductionGroup(brailleBANQBIOUBAFormFields),
          brailleDuoMedia: this.buildProductionGroup(brailleDuoMediaBANQFormFields),
          brailleHYDROQC: this.buildProductionGroup(brailleHYDROQCFormFields),
          grossiHYDROQC: this.buildProductionGroup(grossiHYDROQCFormFields),
        });

        for (const typeKey of Object.keys(phaseData)) {
          const sectionData = phaseData[typeKey];
          const sectionDef = this.getFieldDefByType(typeKey);
          const sectionGroup = phaseGroup.get(typeKey) as FormGroup;

          if (sectionData && sectionDef && sectionGroup) {
            for (const field of sectionDef) {
              if (field.type === 'dynamicTable' && Array.isArray(sectionData[field.key])) {
                const formArray = sectionGroup.get(field.key) as FormArray;
                formArray.clear();

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

        phaseGroup.patchValue(phaseData, { emitEvent: false });
        phasesArray.push(phaseGroup);
      });
    }
  }


  downloadJson() {
    const data = this.form.value;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'requisition.json';
    a.click();
    URL.revokeObjectURL(a.href);

    if (this.lockedFilePath) {
      window.electronAPI.unlockFile(this.lockedFilePath);
      this.lockedFilePath = null;
    }
    this.form.markAsPristine();
  }

  @HostListener('window:beforeunload', ['$event'])
  ngOnDestroy() {
    if (this.lockedFilePath) {
      window.electronAPI.unlockFile(this.lockedFilePath);
      this.lockedFilePath = null;
    }
  }

  canDeactivate(): boolean {
    if (this.form?.dirty) {
      return confirm('Vous avez des modifications non enregistrées. Voulez-vous vraiment quitter cette page?');
    }
    return true;
  }
}
