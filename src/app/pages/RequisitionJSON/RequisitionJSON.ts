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
import { ConfirmDialogComponent } from '../Guard/confirm-dialog'; // Import the confirm dialog component
import { generatePDF } from '../../layout/service/pdf-generator'; // Import the PDF generation service
import { DialogModule } from 'primeng/dialog';

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
    ConfirmDialogComponent, // Include the confirm dialog component
    DialogModule
  ],
})
export class RequisitionJSON implements OnInit, AfterViewInit, CanComponentDeactivate, OnDestroy {

  findText = '';
  replaceText = '';
  showFindReplaceDialog = false;

  exitDialogVisible = false;
  lockDialogVisible = false;
  lockMessage = '';
  confirmTitle = '';
  private confirmationResolver: ((result: boolean) => void) | null = null;

  totalFromFacturation = 0;


  @ViewChild('pageTitle') pageTitle!: ElementRef;
  @ViewChildren('phaseTitle') phaseTitles!: QueryList<ElementRef>;

  requisitionType: RequisitionType = RequisitionType.Unknown;
  requisitionTypeString: string = '';
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
    this.setupCalculations();
    this.FunctionsForRequisitionTypes();
    this.handleAltF4(); // Handle Alt+F4 to prevent default close behavior

    window.electronAPI.onTriggerDownload(() => {
      this.downloadJson();
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pageTitle.nativeElement.focus();
    }, 0);
  }

  handleAltF4(): void {
    // ✅ Handle window close
    window.electronAPI.onWindowCloseAttempt(async () => {
      const isDirty = this.form.dirty;
      await window.electronAPI.sendCloseResponse(isDirty);
    });
  }

  private detectRequisitionType(): void {
    const url = this.router.url;
    if (url.includes('/requisition-json-externe')) {
      this.requisitionType = RequisitionType.Externe;
      this.requisitionTypeString = 'externe';
    } else if (url.includes('/requisition-json-interne')) {
      this.requisitionType = RequisitionType.Interne;
      this.requisitionTypeString = 'interne';
    } else if (url.includes('/requisition-json-scolaire')) {
      this.requisitionType = RequisitionType.Scholaire;
      this.requisitionTypeString = 'scolaire';
    } else if (url.includes('/requisition-json-services')) {
      this.requisitionType = RequisitionType.Services;
      this.needsPhase = false; // Services requisition does not need phases
      this.requisitionTypeString = 'services';
    } else if (url.includes('/requisition-json-banq')) {
      this.requisitionType = RequisitionType.BANQ;
      this.productionTypes = productionFieldsBANQ;
      this.requisitionTypeString = 'banq';
    } else if (url.includes('/requisition-json-hydroqc')) {
      this.requisitionType = RequisitionType.HydroQC;
      this.productionTypes = productionFieldsHYDRO;
      this.requisitionTypeString = 'hydro';
    } else if (url.includes('/requisition-json-materiel')) {
      this.requisitionType = RequisitionType.Materiel;
      this.needsPhase = false; // Materiel requisition does not need phases
      this.requisitionTypeString = 'materiel';
    } else {
      this.requisitionType = RequisitionType.Unknown;
    }
  }


  //#region Form Builders

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

  //#endregion

  //#region Table d'heures

  totalHeuresValue = 0;
  rowSubtotals: number[] = []; // store subtotal for each row

  calculateTotalHeures(): void {
    const tableHeureArray = this.form.get('tableHeure') as FormArray;
    if (!tableHeureArray) {
      console.log('Table d\'heures non trouvée');
      this.totalHeuresValue = 0;
      return;
    }

    let grandTotal = 0;

    tableHeureArray.controls.forEach((rowGroup: AbstractControl) => {
      if (rowGroup instanceof FormGroup) {
        let rowTotal = 0;

        Object.keys(rowGroup.controls).forEach(key => {
          // Skip 'Debut', 'Fin', and 'sousTotal'
          if (key.includes('Debut') || key.includes('Fin') || key === 'sousTotal') return;

          const val = parseFloat(rowGroup.get(key)?.value);
          if (!isNaN(val)) rowTotal += val;
        });

        // Store subtotal in the sousTotal column
        rowGroup.get('sousTotal')?.setValue(rowTotal, { emitEvent: false });

        grandTotal += rowTotal;
      }
    });

    this.totalHeuresValue = grandTotal;
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
  //#endregion

  //#region Dynamic Tables

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


  getDynamicTableTotal(phase: any, type: any, field: any): number {
    const formArray = this.getFormArrayFromNestedGroup(phase, type, field.key);
    const totalKey = field.totalKey;

    if (!formArray || !totalKey) return 0;

    return formArray.controls.reduce((sum, group) => {
      const value = Number(group.get(totalKey)?.value);
      return sum + (isNaN(value) ? 0 : value);
    }, 0);
  }

  getTotalLabel(field: any): string {
    const col = field.columns?.find((c: any) => c.key === field.totalKey);
    return col?.label || '';
  }

  //#endregion


  //#region Phases

  get phases(): FormArray {
    return this.form.get('phases') as FormArray;
  }
  /* ADD PRODUCTIONS HERE */
  addPhase(): void {
    const newPhase = this.fb.group({
      selectedTypes: this.fb.control<string[]>([]),
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

    const phasesArray = this.phases;

    if (phasesArray.length > 0) {
      const lastPhase = phasesArray.at(phasesArray.length - 1) as FormGroup;
      const lastSelectedTypes = lastPhase.get('selectedTypes')?.value as string[];

      for (const type of lastSelectedTypes) {
        const fields = this.persistentFieldsPerType[type];
        if (!fields) continue;

        const lastGroup = lastPhase.get(type) as FormGroup;
        const newGroup = newPhase.get(type) as FormGroup;

        if (lastGroup && newGroup) {
          for (const field of fields) {
            const value = lastGroup.get(field)?.value;
            if (newGroup.contains(field)) {
              newGroup.get(field)?.setValue(value);
            }
          }
        }
      }

      // Copy selected production types into the new phase
      newPhase.get('selectedTypes')?.setValue([...lastSelectedTypes]);
    }

    phasesArray.push(newPhase);

    setTimeout(() => {
      const lastTitle = this.phaseTitles.last;
      if (lastTitle) lastTitle.nativeElement.focus();
    }, 300);
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
  //#endregion


  //#region Import & Download

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

  async openAndLockFile(): Promise<void> {
    try {
      const filePath: string = await window.electronAPI.openFileDialog();
      if (!filePath) return;

      const fileName = filePath.split(/[/\\]/).pop(); // Handles both Windows and UNIX paths
      if (fileName) {
        document.title = 'Réquisition Web - ' + fileName;
      }

      // 🔒 Step 1: Check if locked BEFORE locking
      const checkResult = await window.electronAPI.checkLock(filePath);
      if (checkResult.locked) {
        this.showPopUpDialog(`Ce fichier est déjà utilisé par ${checkResult.lockedBy}.`, 'Fichier déjà verrouillé');
        return;
      }

      // 🔒 Step 2: Lock the file
      const lockResult = await window.electronAPI.lockFile(filePath);
      if (!lockResult.success) {
        this.showPopUpDialog(`Impossible de verrouiller le fichier. Il est utilisé par ${lockResult.lockedBy}.`, 'Fichier déjà verrouillé');
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
      this.showPopUpDialog('Erreur lors de la lecture ou du verrouillage du fichier.', 'Fichier invalide');
    }

    this.form.markAsPristine(); //make form clean after loading data
  }


  patchFormFromData(data: any): void {
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

  async downloadJson() {
    const data = this.form.value;
    const jsonData = JSON.stringify(data, null, 2);
    console.log('Téléchargement des données JSON:', jsonData);
    if (this.lockedFilePath) {
      // Save back to original file
      const result = await window.electronAPI.saveJson(this.lockedFilePath, jsonData);
      if (!result.success) {
        console.error('Erreur lors de la sauvegarde du fichier:', result.error);
        this.showPopUpDialog('Impossible d\'enregistrer le fichier.', 'Erreur de sauvegarde');
      }
      await window.electronAPI.unlockFile(this.lockedFilePath);
      this.lockedFilePath = null;
      console.log('Fichier sauvegardé et déverrouillé avec succès.');
      this.showPopUpDialog('Fichier sauvegardé avec succès.', 'Succès de sauvegarde');
    } else {
      // Fallback: browser download
      const blob = new Blob([jsonData], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'requisition.json';
      a.click();
      URL.revokeObjectURL(a.href);
    }

    this.form.markAsPristine();
  }

  //#endregion


  //#region Electron events

  @HostListener('window:beforeunload', ['$event'])
  ngOnDestroy() {
    if (this.lockedFilePath) {
      window.electronAPI.unlockFile(this.lockedFilePath);
      this.lockedFilePath = null;
    }

  }

  canDeactivate(): boolean | Promise<boolean> {
    if (!this.form?.dirty) {
      return true;
    }

    if (this.exitDialogVisible) {
      return false;
    }
    this.exitDialogVisible = true;
    return new Promise<boolean>((resolve) => {
      this.confirmationResolver = resolve;
    });
  }

  onConfirmNavigation() {
    this.exitDialogVisible = false;
    if (this.confirmationResolver) {
      this.confirmationResolver(true);
      this.confirmationResolver = null;
    }
  }

  onCancelNavigation() {
    this.exitDialogVisible = false;
    if (this.confirmationResolver) {
      this.confirmationResolver(false);
      this.confirmationResolver = null;
    }
  }

  showPopUpDialog(message: string, title: string): void {
    this.lockMessage = message;
    this.confirmTitle = title || 'Fichier verrouillé';
    this.lockDialogVisible = true;
  }

  onLockDialogClose(): void {
    this.lockDialogVisible = false;
  }
  //#endregion


  //#region PDF Generation

  testFunction(): void {
    generatePDF(this.requisitionTypeString, this.form.value, this.totalFromFacturation);
    console.log(this.form.value);
  }


  //#endregion

  //#region Find and Replace
  replaceInForm() {
    if (!this.findText) return;

    const find = this.findText.trim();
    const replace = this.replaceText || '';

    this.traverseControls(this.form, find, replace);

    this.showFindReplaceDialog = false; // Close dialog after replacing
  }


  traverseControls(control: AbstractControl, find: string, replace: string) {
    if (control instanceof FormGroup) {
      Object.values(control.controls).forEach(child => {
        this.traverseControls(child, find, replace);
      });
    } else if (control instanceof FormArray) {
      control.controls.forEach(child => {
        this.traverseControls(child, find, replace);
      });
    } else if (control instanceof FormControl) {
      const value = control.value;
      if (typeof value === 'string' && value.includes(find)) {
        control.setValue(value.split(find).join(replace));
      }
    }
  }
  //#endregion

  //#region Clone Info
  readonly persistentFieldsPerType: { [key: string]: string[] } = {
    //Etext
    etext: ['noFichierEtext', 'niveauDifficulteEtext', 'langueNotesProdEtext', 'courrielEText', 'autreCourrielEText'],
    //Braille
    braille: ['noFichierBraille', 'quantiteBraille', 'niveauDifficulteBraille',
      'typeBrailleCheckboxBraille', 'codeBrailleCheckboxBraille', 'autreCodeBraille', 'formatBraille', 'autreFormatBraille',
      'typeFeuilleBraille', 'embossageBraille', 'autreEmbossageBraille', 'materielBraille',
      'autreMaterielBraille', 'typeTeneurBraille', 'typeCouvertureBraille', 'autreTypeCouvBraille'],
    //Dessin
    dessin: ['noFichierDessin', 'quantiteDessin', 'niveauDifficulteDessin', 'typeCheckboxDessin', 'typeBrailleCheckboxDessin',
      'codeBrailleBaseDessin', 'autreCodeBrailleDessin', 'typePoliceCaracteresDessin', 'taillePoliceCaracteresDessin',
      'formatDessin', 'autreFormatDessin', 'typeCouleurAChoisirDessin', 'typeImpressionDessin', 'autretypeImpressionDessin',
      'rectoVersoCheckboxDessin', 'materielDessin', 'autreMaterielDessin'],
    //Grossi
    grossi: ['noFichierGrossi', 'quantiteGrossi', 'niveauDifficulteGrossi', 'typePoliceGrossi',
      'taillePoliceGrossi', 'FormatGrossi', 'autreFormatGrossi', 'monochromeGrossi', 'couleurGrossi',
      'envoiCourrielSeulGrossi', 'impressionGrossi', 'typeTeneurGrossi', 'typeCouvertureGrossi',
      'libelleEtiquetteGrossi', 'autreFinitionGrossi'],
    //HTML
    html: ['noFichierHTML', 'niveauDifficulteHTML', 'courrielCheckboxHTML', 'autreExpliquationHTML',],
    //PDF
    pdf: ['noFichierPDF', 'pdfAccessiblePDF', 'pdfNavigablePDF', 'niveauDifficultePDF', 'courrielCheckboxPDF', 'autreExpliquationPDF'],
    //Formulaire
    formulaire: ['noFichierFormulaire', 'typeFormFormulaire', 'niveauDifficulteFormulaire', 'courrielCheckboxFormulaire', 'autreExpliquationFormulaire'],
    //Agrandis
    agrandis: ['numFichierAgrandissement', 'quantiteAgrandissement', 'PourcentageAgrandissement', 'taillePoliceAgrandissement', 'FormatGrossi', 'autreFormatAgrandissement',
      'monochromeAgrandissement', 'couleurAgrandissement', 'impressionAgrandissement', 'typeTeneurAgrandissement', 'typeCouvertureAgrandissement',
      'autreCouvAgrandissement'],
  };

  //#endregion

  //#region Calculations

  // Add this to your component class
  private setupCalculations() {
    // Listen for form changes to trigger calculations
    this.form.valueChanges.subscribe(() => {
      this.calculateAllTables();
    });
  }

  private calculateAllTables() {
    // Find all facturation tables in formFields
    this.formFields.forEach(field => {
      if (field.type === 'facturationTable') {
        this.calculateTable(field);
      }
    });
  }

  private calculateTable(field: any) {
    const formArray = this.getTopLevelDynamicTableArray(field.key);
    if (!formArray) return;

    let grandTotal = 0;

    formArray.controls.forEach((control: AbstractControl, index: number) => {
      const rowGroup = control as FormGroup;

      // Calculate row subtotal if needed
      if (field.columns.some((col: any) => col.calculated)) {
        this.calculateRow(rowGroup, field.columns);
      }

      // Add to grand total if configured
      if (field.calculateTotal) {
        const totalControl = rowGroup.get('total');
        if (totalControl) {
          const value = parseFloat(totalControl.value) || 0;
          grandTotal += value;
        }
      }
    });

    // Update the total display
    if (field.calculateTotal) {
      this.updateTotalDisplay(field.key, grandTotal);
    }
  }

  private calculateRow(rowGroup: FormGroup, columns: any[]) {
    // Find which columns are involved in calculations
    const calculateColumns = columns.filter(col => col.calculate);
    const calculatedColumn = columns.find(col => col.calculated);

    if (!calculatedColumn) return;

    // Perform calculation (simple multiplication of quantity * price)
    if (calculateColumns.length === 2 &&
      calculateColumns[0].key === 'quantite' &&
      calculateColumns[1].key === 'prix') {
      const quantity = parseFloat(rowGroup.get('quantite')?.value) || 0;
      const price = parseFloat(rowGroup.get('prix')?.value) || 0;
      const total = quantity * price;

      rowGroup.get(calculatedColumn.key)?.setValue(total.toFixed(2), { emitEvent: false });
    }
  }

  private updateTotalDisplay(tableKey: string, total: number) {
    // Find the total input element and update its value
    const totalInput = document.getElementById(`${tableKey}-total`);
    if (totalInput) {
      (totalInput as HTMLInputElement).value = total.toFixed(2);
      this.totalFromFacturation = total; // Update the global totalFromFacturation variable
    }
  }

  //#endregion



  //#region Fonctions spécifiques par type de réquisition

  private FunctionsForRequisitionTypes(): void {
    if (this.requisitionType === RequisitionType.Scholaire) {
      this.setupCheckboxLogic();
    }
  }

  //#region Scolaire
  private setupCheckboxLogic(): void {
    const typeEcoleGroup = this.form.get('typeEcole') as FormGroup;
    const nomClientControl = this.form.get('nomClientScolaire');
    const noClientScolaire = this.form.get('noClientScolaire');

    if (!typeEcoleGroup || !nomClientControl) return;

    typeEcoleGroup.valueChanges.subscribe(value => {
      // value looks like: { ccsi: true/false, universite: true/false }
      if (value.ccsi) {
        nomClientControl.setValue('Cégep du Vieux Montréal', { emitEvent: false });
        noClientScolaire?.setValue('3000003', { emitEvent: false });
      } else {
        // Optionally clear when unchecked
        nomClientControl.setValue('', { emitEvent: false });
        noClientScolaire?.setValue('', { emitEvent: false });
      }
    });
  }


  //#endregion
  //#endregion
}