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

    this.formFields.forEach(field => {
      group[field.key] = new FormControl(field.type === 'checkbox' ? false : '');
    });

    group['phases'] = this.fb.array([]); // Add dynamic phases
    this.form = this.fb.group(group);
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
    const group: { [key: string]: FormControl } = {};
    fields.forEach(field => {
      group[field.key] = new FormControl('');
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

        if (data.phases && Array.isArray(data.phases)) {
          const phasesArray = this.form.get('phases') as FormArray;

          (data.phases as RequisitionPhase[]).forEach((phase: RequisitionPhase) => {
            const phaseGroup = this.fb.group({
              selectedTypes: [phase.selectedTypes || []],
              etext: this.fb.group({}),
              braille: this.fb.group({}),
              audio: this.fb.group({}),
            });

            if (phase.selectedTypes?.includes('etext')) {
              const etextGroup = this.buildProductionGroup(eTextFormFields);
              etextGroup.patchValue(phase.etext || {});
              phaseGroup.setControl('etext', etextGroup);
            }

            if (phase.selectedTypes?.includes('braille')) {
              const brailleGroup = this.buildProductionGroup(brailleFormFields);
              brailleGroup.patchValue(phase.braille || {});
              phaseGroup.setControl('braille', brailleGroup);
            }

            if (phase.selectedTypes?.includes('audio')) {
              const audioGroup = this.fb.group({}); // Update if audioFormFields are defined
              audioGroup.patchValue(phase.audio || {});
              phaseGroup.setControl('audio', audioGroup);
            }

            phasesArray.push(phaseGroup);
          });
        }

        this.form.patchValue(data);
      } catch (err) {
        alert('Invalid JSON file.');
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
