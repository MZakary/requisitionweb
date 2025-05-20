import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';

import { externeFormFields } from '../../../requisition-questions/externe-form-definition';
import { interneFormFields } from '../../../requisition-questions/interne-form-definition';
import { scolaireFormFields } from '../../../requisition-questions/scolaire-form-definition';
import { servicesFormFields } from '../../../requisition-questions/services-form-definition';
import { eTextFormFields } from '../../../requisition-questions/shared/eText-form-definition';
import { brailleFormFields } from '../../../requisition-questions/shared/braille-form-definition';
// import { audioFormFields } from '../../../requisition-questions/shared/audio-form-definition'; // Exemple, ajoute tes fichiers
// import { threeDFormFields } from '../../../requisition-questions/shared/threeD-form-definition'; // Exemple

import { productionFields } from '../../../requisition-questions/shared/productionFields';

enum RequisitionType {
  Externe = 'Externe',
  Interne = 'Interne',
  Scholaire = 'Scholaire',
  Services = 'Services',
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
    MultiSelectModule,
  ],
})
export class RequisitionJSON implements OnInit, AfterViewInit {
  @ViewChild('pageTitle') pageTitle!: ElementRef;

  requisitionType: RequisitionType = RequisitionType.Unknown;
  form!: FormGroup;
  formFields: any[] = [];

  productionOptions = productionFields;
  selectedProductions: string[] = [];

  // Map des productions vers leurs questions / champs
  productionFormFieldsMap: { [key: string]: any[] } = {
    braille: brailleFormFields,
    etext: eTextFormFields,
    // audio: audioFormFields,
    // threeD: threeDFormFields,
    // ajoute d'autres si besoin
  };

  public productionTitles: { [key: string]: string } = {
    braille: 'Production Braille',
    etext: 'Production E-Text',
    audio: 'Production Audio',
    threeD: 'Production 3D',
    largePrint: 'Production en gros caractères',
    pdfAccessible: 'PDF accessible',
    autres: 'Autres formats',
  };

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
      default:
        this.formFields = [];
        break;
    }
  }

  private buildFormGroup(): void {
    const group: { [key: string]: any } = {};

    // Champs généraux
    this.formFields.forEach(field => {
      if (field.type === 'checkbox') {
        group[field.key] = new FormControl(false);
      } else {
        group[field.key] = new FormControl('');
      }
    });

    // Pour chaque production sélectionnée, créer FormArray phases
    this.selectedProductions.forEach(prod => {
      const fields = this.productionFormFieldsMap[prod];
      if (fields) {
        group[`${prod}Phases`] = this.fb.array([this.createPhaseGroup(fields)]);
      }
    });

    this.form = this.fb.group(group);
  }

  createPhaseGroup(fields: any[]): FormGroup {
    const group: { [key: string]: any } = {};
    fields.forEach(field => {
      if (field.type !== 'header2') {
        group[field.key] = field.type === 'checkbox' ? new FormControl(false) : new FormControl('');
      }
    });
    return this.fb.group(group);
  }

  getPhasesArray(prod: string): FormArray {
    return this.form.get(`${prod}Phases`) as FormArray;
  }

  addPhase(prod: string) {
    const fields = this.productionFormFieldsMap[prod];
    this.getPhasesArray(prod).push(this.createPhaseGroup(fields));
  }

  removePhase(prod: string, index: number) {
    this.getPhasesArray(prod).removeAt(index);
  }

  onCheckboxToggle(value: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked && !this.selectedProductions.includes(value)) {
      this.selectedProductions.push(value);
    } else if (!checked) {
      this.selectedProductions = this.selectedProductions.filter(v => v !== value);
      // retirer les phases si décoché
      if (this.form.contains(`${value}Phases`)) {
        this.form.removeControl(`${value}Phases`);
      }
    }
    this.onProductionChange();
  }

  onProductionChange() {
    // Rebuild the form group each time productions change
    this.buildFormGroup();
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

        if (data.selectedProductions) {
          this.selectedProductions = data.selectedProductions;
          this.onProductionChange();
        }

        this.form.patchValue(data);

        // Patch phases for each production
        this.selectedProductions.forEach(prod => {
          const phasesData = data[`${prod}Phases`];
          if (phasesData && Array.isArray(phasesData)) {
            const phasesArray = this.getPhasesArray(prod);
            phasesArray.clear();
            phasesData.forEach((phase: any) => {
              const fg = this.createPhaseGroup(this.productionFormFieldsMap[prod]);
              fg.patchValue(phase);
              phasesArray.push(fg);
            });
          }
        });

      } catch (err) {
        alert('Invalid JSON file.');
      }
    };

    reader.readAsText(file);
  }

  downloadJson() {
    const data = {
      ...this.form.value,
      selectedProductions: this.selectedProductions,
    };
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
