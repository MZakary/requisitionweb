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
import { generatePDF, generateBraillePDFs, generateProductionBraillePDF } from '../../layout/service/pdf-generator'; // Import the PDF generation service
import { DialogModule } from 'primeng/dialog';
import { TocService } from '../../layout/service/toc.service';
import { take } from 'rxjs/operators';
import { NgZone } from '@angular/core';
import { Textarea } from 'primeng/textarea';
import { ProjectUploadService } from '../../services/project-upload.service';

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
    DialogModule,
    Textarea
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

  private isImporting = false;

  private uploadedPhaseIds: Set<string> = new Set(); // Track uploaded phases by a unique identifier
  private currentProjectIds: number[] = [];


  @ViewChild('pageTitle') pageTitle!: ElementRef;
  @ViewChildren('phaseTitle') phaseTitles!: QueryList<ElementRef>;
  @ViewChildren(Textarea) textareas!: QueryList<Textarea>;

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

  constructor(private router: Router, private fb: FormBuilder, private cd: ChangeDetectorRef, private tocService: TocService,
    private ngZone: NgZone, private projectUploadService: ProjectUploadService
  ) {

    // setInterval(() => {
    //   console.log(this.form.value);
    // }, 1000); // logs every second
  }

  ngOnInit(): void {
    this.detectRequisitionType();
    this.buildFormFields();
    this.buildFormGroup();
    this.setupCalculations();
    this.setupPhaseCalculations();
    this.setupETextAutoCopy(); // Add this line
    this.setupPhaseChangeTracking();
    //this.FunctionsForRequisitionTypes();

    this.handleAltF4(); // Handle Alt+F4 to prevent default close behavior

    window.electronAPI.onTriggerDownload(() => {
      this.downloadJson();
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pageTitle.nativeElement.focus();
      this.tocService.requestUpdate();
      this.cd.detectChanges()
    }, 0);
  }


  private queueTocUpdate() {
    this.ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.tocService.requestUpdate();
    });
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

            // Add override flag for facturation tables only
            if (field.type === 'facturationTable') {
              groupControls['_manualOverride'] = new FormControl(false);
            }

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
      uploaded: this.fb.control<boolean>(false),
      needsUpdate: this.fb.control<boolean>(false),
      etext: this.buildProductionGroup(this.eTextFormFields),
      braille: this.buildProductionGroup(this.brailleFormFields),
      grossi: this.buildProductionGroup(this.grossiFormFields),
      agrandis: this.buildProductionGroup(this.agrandisFormFields),
      num: this.buildProductionGroup(this.numerisationFormFields),
      pdf: this.buildProductionGroup(this.pdfFormFields),
      html: this.buildProductionGroup(this.htmlFormFields),
      form: this.buildProductionGroup(this.formulaireFormFields),
      dessin: this.buildProductionGroup(this.dessinFormFields),
      sonore: this.buildProductionGroup(this.sonoreFormFields),
      autre: this.buildProductionGroup(this.autreFormFields),
      brailleBANQ: this.buildProductionGroup(this.brailleBANQBIBAFormFields),
      brailleBANQ2: this.buildProductionGroup(this.brailleBANQBIOUBAFormFields),
      brailleDuoMedia: this.buildProductionGroup(this.brailleDuoMediaBANQFormFields),
      brailleHYDROQC: this.buildProductionGroup(this.brailleHYDROQCFormFields),
      grossiHYDROQC: this.buildProductionGroup(this.grossiHYDROQCFormFields),
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
              newGroup.get(field)?.setValue(value, { emitEvent: false });
            }
          }
        }
      }

      newPhase.get('selectedTypes')?.setValue([...lastSelectedTypes], { emitEvent: false });
    }

    phasesArray.push(newPhase);

    setTimeout(() => {
      const lastTitle = this.phaseTitles.last;
      if (lastTitle) lastTitle.nativeElement.focus();
      this.tocService.requestUpdate();
      this.cd.detectChanges();
    }, 0);
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

    this.ngZone.run(() => {
      this.queueTocUpdate();
    });
  }

  confirmDeleteIndex: number | null = null;

  confirmDeletePhase(index: number): void {
    this.deletePhase(index);
    this.confirmDeleteIndex = null;
  }


  deletePhase(index: number): void {
    this.phases.removeAt(index);

    this.queueTocUpdate();
    this.tocService.requestUpdate();
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

      // 🛡️ Secure boot: Soft check (for legacy files)
      if (!data.ReqType) {
        console.warn("Legacy JSON file detected (no ReqType). Skipping type validation.");
        this.showPopUpDialog("Ce fichier JSON est d'un format plus ancien et ne contient pas le type de réquisition. Un type sera rajouté automatiquement à l'enregistrement.", "Type de réquisition inconnu");
      } else {
        const expected = this.requisitionTypeString.toLowerCase();
        const actual = data.ReqType.toLowerCase();

        if (expected !== actual) {
          this.showPopUpDialog(
            `Ce fichier est de type "${data.ReqType}", mais vous êtes dans "${this.requisitionTypeString}".`,
            "Type de réquisition incompatible"
          );
          await window.electronAPI.unlockFile(filePath);
          return;
        }
      }

      // 📝 Patch the form with loaded data
      this.patchFormFromData(data);
      this.lockedFilePath = filePath;

      // 🏷️ If the file has a requisition number, we could potentially load
      // previously uploaded phases from the database here in the future
      // For now, we just start fresh with tracking

      setTimeout(() => {
        this.cd.detectChanges();
        this.tocService.requestUpdate();

        const elements = document.querySelectorAll('textarea');
        elements.forEach(el => {
          el.dispatchEvent(new Event('input', { bubbles: true }));
        });
      }, 0);

      // Optional: Show how many phases were previously uploaded
      // You could add a small notification here later

    } catch (error) {
      console.error('Erreur lors de l’importation du fichier JSON:', error);
      this.showPopUpDialog('Erreur lors de la lecture ou du verrouillage du fichier.', 'Fichier invalide');
    }

    this.form.markAsPristine(); //make form clean after loading data
    this.tocService.requestUpdate();
  }


  private patchFormFromData(data: any): void {
    try {
      const phasesArray = this.form.get('phases') as FormArray;
      phasesArray.clear();

      // ✅ Only patch top-level fields, NOT phases
      const { phases, ...topLevelData } = data;
      this.form.patchValue(topLevelData, { emitEvent: false });

      this.processSpecialFields(data);

      // ✅ Handle phases manually
      if (Array.isArray(phases)) {
        phases.forEach((phaseData: any) => {
          this.addPhaseFromData(phaseData);
        });
      }

      // Delay change detection to avoid recursion
      setTimeout(() => {
        // this.cd.detectChanges();
        this.tocService.requestUpdate();
      }, 0);

    } catch (error) {
      console.error('Error patching form data:', error);
      throw error;
    }
  }


  private addPhaseFromData(phaseData: any): void {
    const phaseGroup = this.fb.group({
      selectedTypes: [phaseData.selectedTypes || []],
      uploaded: [phaseData.uploaded || false], // Preserve the uploaded flag
      needsUpdate: [phaseData.needsUpdate || false],
    }) as FormGroup;

    const selectedTypes: string[] = phaseData.selectedTypes || [];

    selectedTypes.forEach((type: string) => {
      const fieldDefs = this.getFieldDefByType(type);
      const group = this.buildProductionGroup(fieldDefs);

      if (phaseData[type]) {
        // First patch regular values
        group.patchValue(phaseData[type], { emitEvent: false });

        // Then handle dynamic tables separately
        this.processProductionDynamicTables(group, fieldDefs, phaseData[type]);
      }

      phaseGroup.addControl(type, group);
    });

    this.phases.push(phaseGroup);
  }

  private processProductionDynamicTables(group: FormGroup, fieldDefs: any[], existingData: any): void {
    fieldDefs.forEach(field => {
      if (field.type === 'dynamicTable' && existingData[field.key]) {
        const tableData = existingData[field.key];
        if (Array.isArray(tableData)) {
          const newArray = this.fb.array(
            tableData.map((row: any) => {
              const groupControls = field.columns.reduce((acc: any, col: any) => {
                acc[col.key] = new FormControl(row ? (row[col.key] ?? '') : '');
                return acc;
              }, {});
              return this.fb.group(groupControls);
            })
          );
          group.setControl(field.key, newArray);
        }
      }
    });
  }



  private processSpecialFields(data: any): void {
    // Process tableHeure fields
    this.formFields.forEach(field => {
      if ((field.type === 'dynamicTable' || field.type === 'facturationTable' || field.type === 'tableHeure') &&
        Array.isArray(data[field.key])) {
        this.processTableField(field, data[field.key]);
      }
    });
  }

  private processTableField(field: any, tableData: any[] | undefined): void {
    const rowsFromData = Array.isArray(tableData) ? tableData : [];

    const newArray = this.fb.array(
      rowsFromData.map((row: any, rowIndex: number) => {
        const groupControls = field.columns.reduce((acc: any, col: any) => {
          acc[col.key] = new FormControl(row ? (row[col.key] ?? '') : '');
          return acc;
        }, {});

        // Preserve manual override flag during import
        if (field.type === 'facturationTable') {
          groupControls['_manualOverride'] = new FormControl(row?._manualOverride || false);
        }

        return this.fb.group(groupControls);
      })
    );

    this.form.setControl(field.key, newArray);

    if (field.type === 'tableHeure') {
      this.calculateTotalHeures();
    }
  }


  private buildJson(): any {
    const raw = this.form.getRawValue();

    const result: any = { ...raw };

    // Process phases
    result.phases = raw.phases.map((phase: any) => {
      const selected: string[] = phase.selectedTypes || [];
      const optimized: any = {
        selectedTypes: selected,
        uploaded: phase.uploaded || false, // Include the uploaded flag
        needsUpdate: phase.needsUpdate || false // Include the needsUpdate flag
      };

      for (const type of selected) {
        const value = phase[type];

        if (value && typeof value === 'object' && Object.keys(value).length > 0) {
          optimized[type] = value;
        }
      }

      return optimized;
    });

    return result;
  }



  async downloadJson() {
    // 1. Upload any new phases to DB and update the form's uploaded flags
    await this.uploadProjectsToDB();

    // 2. Build JSON with the updated flags
    const data = {
      ReqType: this.requisitionTypeString,
      ...this.buildJson()
    };
    const jsonData = JSON.stringify(data, null, 2);

    // 3. Save the file
    if (this.lockedFilePath) {
      const result = await window.electronAPI.saveJson(this.lockedFilePath, jsonData);
      if (!result.success) {
        console.error('Erreur lors de la sauvegarde du fichier:', result.error);
        this.showPopUpDialog('Impossible d\'enregistrer le fichier.', 'Erreur de sauvegarde');
      } else {
        this.showPopUpDialog('Fichier sauvegardé avec succès.', 'Succès de sauvegarde');
      }
    } else {
      const blob = new Blob([jsonData], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'requisition.json';
      a.click();
      URL.revokeObjectURL(a.href);
    }

    this.form.markAsPristine();
  }

  // async downloadJsonNew() {
  //   const data = {
  //     ReqType: this.requisitionTypeString,
  //     ...this.buildJson()
  //   };
  //   const jsonData = JSON.stringify(data, null, 2);
  //   //console.log('Téléchargement des données JSON:', jsonData);

  //   const blob = new Blob([jsonData], { type: 'application/json' });
  //   const a = document.createElement('a');
  //   a.href = URL.createObjectURL(blob);
  //   a.download = 'requisition.json';
  //   a.click();
  //   URL.revokeObjectURL(a.href);
  //   await this.uploadProjectsToDB();


  //   this.form.markAsPristine();
  // }

  async unlockAndOpenNew() {
    if (this.lockedFilePath) {
      await window.electronAPI.unlockFile(this.lockedFilePath);
      this.lockedFilePath = null;

      this.openAndLockFile();
    } else {
      return;
    }
  }

  //#endregion


  //#region Electron events

  @HostListener('window:beforeunload')
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
    //console.log(this.form.value);
  }

  genererPageTitre(): void {
    generateBraillePDFs(this.requisitionTypeString, this.form.value);
  }

  generateFeuilleProd(): void {
    generateProductionBraillePDF(this.form.value);
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
    etext: ['noFichierEText', 'niveauDifficulteEtext', 'langueNotesProdEtext', 'courrielEText', 'autreCourrielEText', 'specificationsClientEText'],
    //Braille
    braille: ['noFichierBraille', 'quantiteBraille', 'niveauDifficulteBraille',
      'typeBrailleCheckboxBraille', 'codeBrailleCheckboxBraille', 'autreCodeBraille', 'formatBraille', 'autreFormatBraille',
      'typeFeuilleBraille', 'embossageBraille', 'autreEmbossageBraille', 'materielBraille',
      'autreMaterielBraille', 'typeTeneurBraille', 'typeCouvertureBraille', 'autreTypeCouvBraille', 'specificationsClientBraille'],
    //Dessin
    dessin: ['noFichierDessin', 'quantiteDessin', 'niveauDifficulteDessin', 'typeCheckboxDessin', 'typeBrailleCheckboxDessin',
      'codeBrailleBaseDessin', 'autreCodeBrailleDessin', 'typePoliceCaracteresDessin', 'taillePoliceCaracteresDessin',
      'formatDessin', 'autreFormatDessin', 'typeCouleurAChoisirDessin', 'typeImpressionDessin', 'autretypeImpressionDessin',
      'rectoVersoCheckboxDessin', 'materielDessin', 'autreMaterielDessin', 'specificationsClientDessin'],
    //Grossi
    grossi: ['noFichierGrossi', 'quantiteGrossi', 'niveauDifficulteGrossi', 'typePoliceGrossi',
      'taillePoliceGrossi', 'FormatGrossi', 'autreFormatGrossi', 'monochromeGrossi', 'couleurGrossi',
      'envoiCourrielSeulGrossi', 'impressionGrossi', 'typeTeneurGrossi', 'typeCouvertureGrossi',
      'libelleEtiquetteGrossi', 'autreFinitionGrossi', 'specificationsClientGrossi'],
    //HTML
    html: ['noFichierHTML', 'niveauDifficulteHTML', 'courrielCheckboxHTML', 'autreExpliquationHTML', 'specificationsClientHTML'],
    //PDF
    pdf: ['noFichierPDF', 'pdfAccessiblePDF', 'pdfNavigablePDF', 'niveauDifficultePDF', 'courrielCheckboxPDF', 'autreExpliquationPDF', 'specificationsClientPDF'],
    //Formulaire
    formulaire: ['noFichierFormulaire', 'typeFormFormulaire', 'niveauDifficulteFormulaire', 'courrielCheckboxFormulaire', 'autreExpliquationFormulaire', 'specificationsClientFormulaire'],
    //Agrandis
    agrandis: ['numFichierAgrandissement', 'quantiteAgrandissement', 'PourcentageAgrandissement', 'taillePoliceAgrandissement', 'FormatGrossi', 'autreFormatAgrandissement',
      'monochromeAgrandissement', 'couleurAgrandissement', 'impressionAgrandissement', 'typeTeneurAgrandissement', 'typeCouvertureAgrandissement',
      'autreCouvAgrandissement', 'specificationsClientAgrandissement'],
  };

  //#endregion

  //#region Calculations

  // Add this to your component class
  private setupCalculations() {
    // Listen for form changes to trigger calculations
    this.form.valueChanges.subscribe(() => {
      this.calculateAllTables();
      this.calculateBANQProductionTotals();
    });
  }

  private calculateAllTables() {
    // Find all facturation tables in formFields
    this.formFields.forEach(field => {
      if (field.type === 'facturationTable') {
        this.calculateTable(field);
      }
    });
    this.calculateBANQProductionTotals();
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
    const calculateColumns = columns.filter(col => col.calculate);
    const calculatedColumn = columns.find(col => col.calculated);

    if (!calculatedColumn) return;

    // Check if this row has been manually overridden
    const isManuallyOverridden = rowGroup.get('_manualOverride')?.value;

    if (calculateColumns.length === 2 &&
      calculateColumns[0].key === 'quantite' &&
      calculateColumns[1].key === 'prix' &&
      !isManuallyOverridden) { // Only calculate if not overridden

      let quantity = parseFloat(rowGroup.get('quantite')?.value) || 0;
      const price = parseFloat(rowGroup.get('prix')?.value) || 0;

      // Get the description to check for special pricing
      const description = rowGroup.get('description')?.value || '';

      // Adjust quantity if it's "per 1000 characters"
      if (description.includes('1000 caractères')) {
        quantity = quantity / 1000;
      }

      const total = quantity * price;

      rowGroup.get(calculatedColumn.key)?.setValue(total.toFixed(2), { emitEvent: false });
    }
  }

  toggleManualOverride(tableKey: string, rowIndex: number) {
    const tableArray = this.getTopLevelDynamicTableArray(tableKey);
    if (!tableArray || rowIndex >= tableArray.length) return;

    const rowGroup = tableArray.at(rowIndex) as FormGroup;
    const currentOverride = rowGroup.get('_manualOverride')?.value;
    rowGroup.get('_manualOverride')?.setValue(!currentOverride);

    // If turning OFF manual override, recalculate the row
    if (currentOverride) {
      const field = this.formFields.find(f => f.key === tableKey && f.type === 'facturationTable');
      if (field) {
        this.calculateRow(rowGroup, field.columns);
      }
    }

    this.form.markAsDirty();
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

  // Add this method to your component class
  private setupETextAutoCopy(): void {
    // Listen for phase changes
    this.phases.valueChanges.subscribe(() => {
      this.copyNoFichierToProductionTable();
    });

    // Also listen for the main noFichierEText changes in case it's updated
    this.form.valueChanges.subscribe(() => {
      this.copyNoFichierToProductionTable();
    });
  }

  private copyNoFichierToProductionTable(): void {
    const phasesArray = this.phases;

    phasesArray.controls.forEach((phaseControl, phaseIndex) => {
      const phase = phaseControl as FormGroup;
      const selectedTypes = phase.get('selectedTypes')?.value as string[];

      // Check if etext is selected in this phase
      if (selectedTypes && selectedTypes.includes('etext')) {
        const etextGroup = phase.get('etext') as FormGroup;

        if (etextGroup) {
          const noFichierEText = etextGroup.get('noFichierEText')?.value;
          const tableauProduction = etextGroup.get('tableauProductionEText') as FormArray;

          // Only copy if we have a value and the production table exists
          if (noFichierEText && tableauProduction && tableauProduction.length > 0) {
            const firstRow = tableauProduction.at(0) as FormGroup;
            const noFichProdControl = firstRow.get('noFichProdEText');

            // Only update if the field is empty or different
            if (noFichProdControl && noFichProdControl.value !== noFichierEText) {
              noFichProdControl.setValue(noFichierEText, { emitEvent: false });
            }
          }
        }
      }
    });
  }


  //#endregion


  // Add this method to your component class
  private calculateBANQProductionTotals(): void {
    const phasesArray = this.phases;

    phasesArray.controls.forEach((phaseControl, phaseIndex) => {
      const phase = phaseControl as FormGroup;
      const selectedTypes = phase.get('selectedTypes')?.value as string[];

      // Handle BANQ BI ET BA (both braille types)
      if (selectedTypes && selectedTypes.includes('brailleBANQ')) {
        this.processBANQBIBA(phase);
      }

      // Handle BANQ BI OU BA (either braille type)
      if (selectedTypes && selectedTypes.includes('brailleBANQ2')) {
        this.processBANQBIOUBA(phase);
      }
    });
  }

  private processBANQBIBA(phase: FormGroup): void {
    const brailleBANQGroup = phase.get('brailleBANQ') as FormGroup;
    if (!brailleBANQGroup) return;

    // Get BA table total
    const baTable = brailleBANQGroup.get('tableProductionBrailleBA') as FormArray;
    const baTotal = this.calculateTableTotal(baTable, 'nbsPageProdBraille');

    // Get BI table total  
    const biTable = brailleBANQGroup.get('tableProductionBrailleBI') as FormArray;
    const biTotal = this.calculateTableTotal(biTable, 'nbsPageProdBraille');

    // Update facturation table
    this.updateFacturationTable('Abrégé', baTotal);
    this.updateFacturationTable('Intégral', biTotal);
  }

  private processBANQBIOUBA(phase: FormGroup): void {
    const brailleBANQ2Group = phase.get('brailleBANQ2') as FormGroup;
    if (!brailleBANQ2Group) return;

    // Get the single production table total
    const productionTable = brailleBANQ2Group.get('tableProductionBrailleBAOUBI') as FormArray;
    const total = this.calculateTableTotal(productionTable, 'nbsPageProdBraille');

    // Get the checkbox group for braille type selection
    const typeSelectionGroup = brailleBANQ2Group.get('AbregeIntegralBrailleBANQBAOUBI') as FormGroup;

    if (typeSelectionGroup) {
      // For checkbox-list type, the values are stored as a FormGroup with boolean properties
      const isAbrege = typeSelectionGroup.get('BAbrege')?.value;
      const isIntegral = typeSelectionGroup.get('BIntegral')?.value;

      console.log('BI OU BA - Checkbox values:', { isAbrege, isIntegral, total });

      // Determine which type to update based on selection
      if (isAbrege && !isIntegral) {
        // Only Abrégé is selected
        this.updateFacturationTable('Abrégé', total);
      } else if (isIntegral && !isAbrege) {
        // Only Intégral is selected
        this.updateFacturationTable('Intégral', total);
      } else if (isAbrege && isIntegral) {
        // Both selected - this is unusual for "OU" but handle it
        // You might want to split or choose one - for now, use Abrégé
        this.updateFacturationTable('Abrégé', total);
        console.warn('BI OU BA - Both braille types selected, defaulting to Abrégé');
      } else {
        // Neither selected - this is the likely issue!
        console.warn('BI OU BA - No braille type selected in checkbox-list');
      }
    } else {
      console.warn('BI OU BA - Type selection group not found');
    }
  }

  private calculateTableTotal(tableArray: FormArray, totalKey: string): number {
    if (!tableArray) return 0;

    return tableArray.controls.reduce((sum, rowGroup) => {
      const value = Number(rowGroup.get(totalKey)?.value);
      return sum + (isNaN(value) ? 0 : value);
    }, 0);
  }

  private updateFacturationTable(brailleType: string, quantity: number): void {
    const facturationTable = this.form.get('facturation') as FormArray;
    if (!facturationTable) return;

    // Find the row with matching braille type
    for (let i = 0; i < facturationTable.length; i++) {
      const row = facturationTable.at(i) as FormGroup;
      const typeDeBraille = row.get('typeDeBraille')?.value;

      if (typeDeBraille === brailleType) {
        // Update the quantity, preserving manual override state
        const currentOverride = row.get('_manualOverride')?.value;

        // Only update if not manually overridden
        if (!currentOverride) {
          row.get('quantite')?.setValue(quantity.toString(), { emitEvent: false });
        }
        break;
      }
    }
  }

  // Add this method to handle phase-specific changes
  private setupPhaseCalculations() {
    // Listen for phase changes specifically
    this.phases.valueChanges.subscribe(() => {
      this.calculateBANQProductionTotals();
    });

    // Also listen for changes within phase production tables
    this.form.valueChanges.subscribe(() => {
      // This will be handled by the main valueChanges subscription
    });
  }
  //#endregion

  //#region DB SERVICES
  async uploadProjectsToDB(): Promise<void> {
    const result = await this.projectUploadService.uploadProjects(
      this.form.value,
      this.phases.value,
      this.needsPhase,
      this.requisitionTypeString
    );

    if (result.success) {
      console.log('Projects uploaded successfully');

      // Update the phases in the form with the new flags
      if (result.updatedPhases) {
        const phasesArray = this.phases;
        result.updatedPhases.forEach((updatedPhase, index) => {
          const phaseGroup = phasesArray.at(index) as FormGroup;
          phaseGroup.get('uploaded')?.setValue(updatedPhase.uploaded, { emitEvent: false });
          phaseGroup.get('needsUpdate')?.setValue(updatedPhase.needsUpdate || false, { emitEvent: false });
        });
      }

      const uploadedCount = result.updatedPhases?.filter(p => p.uploaded).length || 0;
      const updatedCount = result.updatedPhases?.filter(p => p.needsUpdate === false && p.uploaded === true).length || 0;

      let message = '';
      if (uploadedCount > 0) message += `${uploadedCount} nouveau(x) projet(s) téléversé(s). `;
      if (updatedCount > 0) message += `${updatedCount} projet(s) mis à jour.`;

      this.showPopUpDialog(message || 'Aucun changement.', 'Succès');

      this.form.markAsDirty();
    } else {
      this.showPopUpDialog(
        `Erreur lors du téléversement: ${result.message}`,
        'Erreur de téléversement'
      );
    }
  }

  // Add this in your component to mark phases as needing update when modified
  private setupPhaseChangeTracking() {
    // Listen for changes in the phases FormArray
    this.phases.valueChanges.subscribe(() => {
      this.checkForPhaseModifications();
    });
  }

  private checkForPhaseModifications() {
    const phasesArray = this.phases;

    phasesArray.controls.forEach((phaseGroup, index) => {
      const uploaded = phaseGroup.get('uploaded')?.value;

      // If this phase was uploaded and we're not already tracking a modification
      if (uploaded) {
        // Mark as needing update
        phaseGroup.get('needsUpdate')?.setValue(true, { emitEvent: false });
        console.log(`Phase ${index + 1} marked as needing update due to modification`);
      }
    });
  }


  //#endregion
}



