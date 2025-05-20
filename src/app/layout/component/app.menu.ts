import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})

export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Menu Principal',
                items: [
                    //{ label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    // { label: 'Réquisition Externe', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-externe'] },
                    // { label: 'Réquisition Interne', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-interne'] },
                    // { label: 'Réquisition Scholaire', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-scholaire'] },
                    // { label: 'Réquisition Services', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-services'] },
                    { label: 'Réquisition Externe', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-externe'] },
                    { label: 'Réquisition Interne', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-interne'] },
                    { label: 'Réquisition Scolaire', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-scolaire'] },
                    { label: 'Réquisition Services', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-services'] },
                    { label: 'Réquisition Matériel', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-materiel'] },
                    { label: 'Réquisition BANQ', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-banq'] },
                    { label: 'Réquisition Hyrdo-Québec', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-hydroqc'] },
                ]
            },

        ];
    }
}
