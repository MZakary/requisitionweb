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
import { productionFields } from '../../../requisition-questions/shared/productionFields';

// Enumération des types de réquisition possibles
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
  @ViewChild('pageTitle') pageTitle!: ElementRef; // Référence vers le titre pour y mettre le focus

  requisitionType: RequisitionType = RequisitionType.Unknown; // Type de réquisition détecté
  form!: FormGroup; // Formulaire réactif principal
  formFields: any[] = []; // Champs du formulaire dynamiques selon le type

  productionOptions = productionFields; // Options de production importées (ex: EText, Braille...)
  selectedProductions: string[] = []; // Productions sélectionnées par l'utilisateur
  public brailleFormFields = brailleFormFields; // Champs spécifiques Braille exposés au template

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.detectRequisitionType(); // Détecte le type selon l'URL
    this.buildFormFields(); // Initialise les champs dynamiques
    this.buildFormGroup(); // Construit le groupe de formulaire
  }

  ngAfterViewInit(): void {
    // Met le focus sur le titre de la page après le rendu
    setTimeout(() => {
      this.pageTitle.nativeElement.focus();
    }, 0);
  }

  // Détecte le type de réquisition à partir de l'URL actuelle
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

  // Initialise les champs du formulaire en fonction du type de réquisition
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

  // Construit le groupe de formulaire avec FormControls et FormArray pour phases Braille
  private buildFormGroup(): void {
    const group: { [key: string]: any } = {};

    // Ajoute tous les champs sauf les phases Braille qui sont traitées séparément
    this.formFields.forEach(field => {
      if (field.key === 'braillePhases') {
        // Ignorer ici, gérer plus bas dans un FormArray
      } else if (field.type === 'checkbox') {
        group[field.key] = new FormControl(false); // case à cocher initialisée à false
      } else {
        group[field.key] = new FormControl(''); // champ texte initialisé vide
      }
    });

    // Ajoute les contrôles pour les productions, sauf Braille (traitée séparément)
    this.productionOptions.forEach(prod => {
      if (prod.value !== 'braille') {
        if (!group[prod.value]) {
          group[prod.value] = new FormControl(false);
        }
      }
    });

    // Ajoute le FormArray pour les phases Braille si sélectionné
    if (this.selectedProductions.includes('braille')) {
      group['braillePhases'] = this.fb.array([this.createBraillePhaseGroup()]);
    }

    this.form = this.fb.group(group);
  }

  // Crée un FormGroup représentant une phase Braille complète
  createBraillePhaseGroup(): FormGroup {
    const group: { [key: string]: any } = {};
    // Pour chaque champ Braille (hors titres), crée un FormControl initialisé selon son type
    brailleFormFields.forEach(field => {
      if (field.type !== 'header2') {
        if (field.type === 'checkbox') {
          group[field.key] = new FormControl(false);
        } else {
          group[field.key] = new FormControl('');
        }
      }
    });
    return this.fb.group(group);
  }

  // Accesseur pour récupérer le FormArray des phases Braille
  get braillePhases(): FormArray {
    return this.form.get('braillePhases') as FormArray;
  }

  // Ajoute une nouvelle phase Braille au FormArray
  addBraillePhase() {
    this.braillePhases.push(this.createBraillePhaseGroup());
  }

  // Supprime une phase Braille à l'index donné
  removeBraillePhase(index: number) {
    this.braillePhases.removeAt(index);
  }

  // Gestion du toggle des cases à cocher pour les productions
  onCheckboxToggle(value: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked && !this.selectedProductions.includes(value)) {
      this.selectedProductions.push(value);
    } else if (!checked) {
      this.selectedProductions = this.selectedProductions.filter(v => v !== value);
    }
    this.onProductionChange();
  }

  // Mise à jour du formulaire en fonction des productions sélectionnées
  onProductionChange() {
    // Si Braille désélectionné, supprimer le FormArray des phases
    if (!this.selectedProductions.includes('braille')) {
      if (this.form.contains('braillePhases')) {
        this.form.removeControl('braillePhases');
      }
    } 
    // Si Braille sélectionné mais pas présent dans le formulaire, l'ajouter
    else if (!this.form.contains('braillePhases')) {
      this.form.addControl('braillePhases', this.fb.array([this.createBraillePhaseGroup()]));
    }
  }

  // Gestion du chargement d'un fichier JSON pour préremplir le formulaire
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

        // Si des phases Braille sont présentes, patcher leur contenu dans le FormArray
        if (data.braillePhases && Array.isArray(data.braillePhases)) {
          const array = this.braillePhases;
          array.clear(); // vider l'ancien contenu
          data.braillePhases.forEach((phase: any) => {
            const fg = this.createBraillePhaseGroup();
            fg.patchValue(phase);
            array.push(fg);
          });
        }
      } catch (err) {
        alert('Fichier JSON invalide.');
      }
    };

    reader.readAsText(file);
  }

  // Téléchargement du formulaire au format JSON
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
