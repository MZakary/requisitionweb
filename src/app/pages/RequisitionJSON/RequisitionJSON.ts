// Importation des modules nécessaires d'Angular et PrimeNG
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

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
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    FloatLabelModule,
    ButtonModule
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
        this.formFields = [
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'age', label: 'Age', type: 'number' },
          { key: 'agreeToTerms', label: 'Agree to Terms', type: 'checkbox' },
          {
            key: 'status',
            label: 'Status',
            type: 'select',
            options: [
              { label: 'Pending', value: 'pending' },
              { label: 'Approved', value: 'approved' },
              { label: 'Rejected', value: 'rejected' }
            ]
          }
        ];
        break;

      case RequisitionType.Interne:
        this.formFields = [
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'address', label: 'Address', type: 'text' },
          { key: 'email', label: 'Email', type: 'email' }
        ];
        break;

      case RequisitionType.Scholaire:
        this.formFields = [
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'graduationDate', label: 'Graduation Date', type: 'date' },
          { key: 'schoolAddress', label: 'School Address', type: 'text' }
        ];
        break;

      case RequisitionType.Services:
        this.formFields = [
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'email', label: 'Email', type: 'email' },
          { key: 'phone', label: 'Phone Number', type: 'text' }
        ];
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
        this.form.patchValue(data); // Appliquer les données JSON dans le formulaire
      } catch (err) {
        alert('Invalid JSON file.');
      }
    };

    reader.readAsText(file);
  }

  // Génère un fichier JSON contenant les valeurs du formulaire et le télécharge
  downloadJson() {
    const blob = new Blob([JSON.stringify(this.form.value, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'requisition.json';
    a.click();

    URL.revokeObjectURL(url);
  }
}
