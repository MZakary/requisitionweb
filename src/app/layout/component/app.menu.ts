import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { TocService } from '../service/toc.service';
import { Subscription } from 'rxjs';

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
export class AppMenu implements OnInit, OnDestroy {
  model: MenuItem[] = [];
  private sub!: Subscription;

  constructor(private tocService: TocService) {}

  ngOnInit() {
    this.model = [
      { label: 'Menu Principal', items: [
          { label: 'Réquisition Externe', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-externe'] },
          { label: 'Réquisition Interne', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-interne'] },
          { label: 'Réquisition Scolaire', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-scolaire'] },
          { label: 'Réquisition Accessibilité', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-services'] },
          { label: 'Réquisition Matériel', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-materiel'] },
          { label: 'Réquisition BANQ', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-banq'] },
          { label: 'Réquisition Hydro-Québec', icon: 'pi pi-fw pi-file-edit', routerLink: ['/requisition-json-hydroqc'] },
          // ... other items
        ] 
      },
      { separator: true },
      { label: 'Table des matières', items: [] }
    ];

    // Subscribe to update requests
    this.sub = this.tocService.update$.subscribe(() => this.UpdateTableMatiere());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  UpdateTableMatiere() {
  const headings = document.querySelectorAll('h1, h2, h3');
  const tocItems: MenuItem[] = [];
  let currentH1: MenuItem | null = null;
  let currentH2: MenuItem | null = null;

  headings.forEach(h => {
    const id = h.id || h.textContent?.trim().replace(/\s+/g, '-').toLowerCase() || '';
    if (!h.id) h.id = id;

    const menuItem: MenuItem = {
      label: h.textContent || '',
      command: () => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
      icon: h.tagName === 'H1' ? 'pi pi-book' : h.tagName === 'H2' ? 'pi pi-angle-right' : 'pi pi-circle'
    };

    if (h.tagName === 'H1') {
      // top-level
      tocItems.push(menuItem);
      currentH1 = menuItem;
      currentH2 = null;
    } else if (h.tagName === 'H2') {
      if (currentH1) {
        currentH1.items = currentH1.items || [];
        currentH1.items.push(menuItem);
        currentH2 = menuItem;
      } else {
        tocItems.push(menuItem); // fallback if no H1 yet
      }
    } else if (h.tagName === 'H3') {
      if (currentH2) {
        currentH2.items = currentH2.items || [];
        currentH2.items.push(menuItem);
      } else if (currentH1) {
        currentH1.items = currentH1.items || [];
        currentH1.items.push(menuItem); // attach under H1 if no H2
      } else {
        tocItems.push(menuItem); // fallback
      }
    }
  });

  const tocSection = this.model.find(m => m.label === 'Table des matières');
  if (tocSection) tocSection.items = tocItems;
}

}
