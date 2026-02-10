import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { FormsModule } from '@angular/forms';
import { RequisitionDbService } from '../../services/requisition-db.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

type ViewMode = 'home' | 'search' | 'filter';

@Component({
  selector: 'app-production',
  standalone: true,
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss'],
  imports: [
    CommonModule,
    ButtonModule,
    InputGroupModule,
    FormsModule,
    ProgressSpinnerModule,
  ]
})
export class ProductionComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('pageTitle') pageTitle!: ElementRef;

  allRequisitions: ProjetRow[] = [];
  filteredRequisitions: ProjetRow[] = [];

  isLoading = false;

  viewMode: ViewMode = 'home';
  searchTerm = '';
  selectedType = '';
  selectedStage = '';

  productionTypes = [
    { label: 'Externe', value: 'externe' },
    { label: 'Interne', value: 'interne' },
    { label: 'Scolaire', value: 'scolaire' },
    { label: 'Services', value: 'services' },
    { label: 'BanQ', value: 'banq' },
    { label: 'HydroQC', value: 'hydroqc' },
    { label: 'Matériel', value: 'materiel' }
  ];

  productionStages = [
    { label: 'En production', value: 'enproduction' },
    { label: 'Livré / À facturer', value: 'livre' },
    { label: 'Facturation', value: 'facturation' },
    { label: 'Final', value: 'final' },
    { label: 'Annulé', value: 'annule' }
  ];

  constructor(private requisitionDbService: RequisitionDbService) {}

  ngAfterViewInit() {
    this.focusTitle();
  }

  ngOnInit() {
    (window as any).electronAPI.setDashboardState(true);
    this.loadInitialData();
  }

  ngOnDestroy() {
    (window as any).electronAPI.setDashboardState(false);
  }

  /* =====================
     LOAD ALL DATA
  ====================== */
  async loadInitialData() {
    this.isLoading = true;
    try {
      const rows = await this.requisitionDbService.getAll();
      this.allRequisitions = rows;
      this.filteredRequisitions = [...this.allRequisitions];
    } finally {
      this.isLoading = false;
    }
  }

  /* =====================
     REFRESH (DB)
  ====================== */
  async refreshDB() {
    this.isLoading = true;
    try {
      const rows = await this.requisitionDbService.getAll();
      this.allRequisitions = rows;
      this.filteredRequisitions = [...this.allRequisitions];
    } finally {
      this.isLoading = false;
    }
  }

  /* =====================
     SEARCH FLOW
  ====================== */
  async search() {
    if (!this.searchTerm.trim()) return;

    this.isLoading = true;
    try {
      const rows = await this.requisitionDbService.search(this.searchTerm);
      this.filteredRequisitions = rows;
      this.viewMode = 'search';
    } finally {
      this.isLoading = false;
    }
  }

  clearSearch() {
    this.searchTerm = '';
    this.viewMode = 'home';
    this.filteredRequisitions = [...this.allRequisitions];
    this.focusTitle();
  }

  /* =====================
     FILTER FLOW
  ====================== */
  async selectType(type: string) {
    this.selectedType = type;
    this.selectedStage = '';
    this.viewMode = 'filter';

    const rows = await this.requisitionDbService.getByType(type);
    this.filteredRequisitions = rows;
  }

  selectStage(stage: string) {
    this.selectedStage = stage;
    this.filteredRequisitions = this.filteredRequisitions.filter(r =>
      r.Statut?.toLowerCase() === stage.toLowerCase()
    );
  }

  backToStages() {
    this.selectedStage = '';
    if (this.selectedType) this.selectType(this.selectedType);
  }

  resetAll() {
    this.selectedType = '';
    this.selectedStage = '';
    this.searchTerm = '';
    this.filteredRequisitions = [...this.allRequisitions];
    this.viewMode = 'home';
    this.focusTitle();
  }

  focusTitle() {
    setTimeout(() => this.pageTitle?.nativeElement?.focus());
  }
}
