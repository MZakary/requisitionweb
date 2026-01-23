import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-production',
    standalone: true,
    templateUrl: './production.html',
    styleUrls: ['./production.scss'],
    imports: [CommonModule, ButtonModule]
})
export class Production {
    @ViewChild('pageTitle') pageTitle!: ElementRef;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.pageTitle.nativeElement.focus();
        }, 0);
    }

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
        { label: 'Livré/À facturer', value: 'livre' },
        { label: 'Facturation', value: 'facturation' },
        { label: 'Final', value: 'final' },
        { label: 'Annulé', value: 'annule' }
    ];

    selectedType = '';
    selectedStage = '';


    setSelected(field: 'selectedType' | 'selectedStage', item: any) {
        this[field] = typeof item === 'string' ? item : item.value;

        if (field === 'selectedType' && this.selectedType === '') {
            this.focusPageTitle();
        }
    }

    resetSelection() {
        this.selectedStage = '';
        this.selectedType = '';
        this.focusPageTitle();
    }

    focusPageTitle() {
        setTimeout(() => {
            this.pageTitle?.nativeElement?.focus();
        });
    }
}
