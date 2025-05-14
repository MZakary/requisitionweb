// Importation des modules nécessaires d'Angular et PrimeNG
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';



//Form imports
import { externeFormFields } from '../../../requisition-questions/externe-form-definition';
import { interneFormFields } from '../../../requisition-questions/interne-form-definition';
import { scolaireFormFields } from '../../../requisition-questions/scolaire-form-definition';
import { servicesFormFields } from '../../../requisition-questions/services-form-definition';
import { eTextFormFields } from '../../../requisition-questions/shared/eText-form-definition';
import { brailleFormFields } from '../../../requisition-questions/shared/braille-form-definition';



// Définition des types possibles de réquisition
enum RequisitionType {
  Externe = 'Externe',
  Interne = 'Interne',
  Scholaire = 'Scolaire',
  Services = 'Services',
  Unknown = 'Inconnue'
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
    MultiSelectModule
  ]
})
export class RequisitionJSON implements OnInit, AfterViewInit {
  @ViewChild('pageTitle') pageTitle!: ElementRef;
  // Type de réquisition détecté à partir de l'URL
  requisitionType: RequisitionType = RequisitionType.Unknown;

  // Groupe de formulaire réactif
  form!: FormGroup;

  // Liste dynamique des champs du formulaire
  formFields: {
    key: string;
    label: string;
    type: string;
    options?: { label: string; value: any }[];
  }[] = [];



  productionOptions = [
    { label: 'EText', value: 'etext' },
    { label: 'Braille', value: 'braille' }
  ];
  selectedProductions: string[] = []; // What user checks



  constructor(private router: Router, private fb: FormBuilder) {}

  // Initialisation du composant
  ngOnInit(): void {
    this.detectRequisitionType();  // Détection du type de réquisition selon l'URL
    this.buildFormFields();        // Construction dynamique des champs en fonction du type
    this.buildFormGroup();         // Création du groupe de formulaire
  }

  ngAfterViewInit(): void {
    // Focus sur le titre de page après chargement
    setTimeout(() => {
      this.pageTitle.nativeElement.focus();
    }, 0);
  }

  // Détection du type de réquisition selon l'URL actuelle
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

  // Définition des champs du formulaire selon le type de réquisition
  private buildFormFields(): void {
    switch (this.requisitionType) {
      case RequisitionType.Externe:
        this.formFields = externeFormFields
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

  // Création du groupe de formulaire en fonction des champs
  private buildFormGroup(): void {
    const group: { [key: string]: any } = {};
    this.formFields.forEach(field => {
      switch (field.type) {
        case 'checkbox':
          group[field.key] = [];
          break;
        case 'number':
          group[field.key] = [];
          break;
        default:
          group[field.key] = [];
          break;
      }
    });
    this.form = this.fb.group(group);
  }

  // Lecture d’un fichier JSON et remplissage automatique du formulaire
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (data.selectedProductions) {
          this.selectedProductions = data.selectedProductions;
          this.onProductionChange(); // Re-add dynamic fields
        }
        this.form.patchValue(data); // Appliquer les données JSON dans le formulaire
      } catch (err) {
        alert('Invalid JSON file.');
      }
    };

    reader.readAsText(file);
  }

  onCheckboxToggle(value: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const checked = input.checked;

    if (checked) {
      this.selectedProductions.push(value);
    } else {
      this.selectedProductions = this.selectedProductions.filter(v => v !== value);
    }
    this.onProductionChange();
  }



  onProductionChange(): void {
    // Supprimer tous les champs liés à EText et Braille, y compris les titres
    this.formFields = this.formFields.filter(
      f => !f.key.startsWith('etext_') && !f.key.startsWith('braille_') && f.key !== 'eTextGeneral' && f.key !== 'brailleGeneral'
    );

    // Supprimer les contrôles du formulaire associés
    [...eTextFormFields, ...brailleFormFields].forEach(field => {
      if (this.form.contains(field.key)) {
        this.form.removeControl(field.key);
      }
    });

    // Ajouter les champs EText si sélectionné
    if (this.selectedProductions.includes('etext')) {
      this.formFields.push(...eTextFormFields);
      eTextFormFields.forEach(field => {
        this.form.addControl(field.key, this.fb.control(''));
      });
    }

    // Ajouter les champs Braille si sélectionné
    if (this.selectedProductions.includes('braille')) {
      this.formFields.push(...brailleFormFields);
      brailleFormFields.forEach(field => {
        this.form.addControl(field.key, this.fb.control(''));
      });
    }
  }


  // Génère un fichier JSON contenant les valeurs du formulaire et le télécharge
  downloadJson() {
    const formData = {
      ...this.form.value,
      selectedProductions: this.selectedProductions
    };

    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'requisition.json';
    a.click();

    URL.revokeObjectURL(url);
  }
}
