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

  constructor(private tocService: TocService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Menu Principal', items: [
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
      {label: 'Base de données', items: [
          { label: 'Production', icon: 'pi pi-fw pi-warehouse', routerLink: ['/production'] },
          { label: 'Revenu', icon: 'pi pi-fw pi-money-bill', routerLink: ['/revenu'] },
          { label: 'Prix', icon: 'pi pi-fw pi-dollar', routerLink: ['/prix'] },
      ]},
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
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocItems: MenuItem[] = [];
    const levelStack: (MenuItem | null)[] = [null, null, null, null, null, null];

    // class name that excludes from TOC
    const excludedClass = 'sr-only';

    headings.forEach(h => {
      // ❌ skip headings with the excluded class
      if (h.classList.contains(excludedClass)) {
        return;
      }

      const id =
        h.id ||
        h.textContent?.trim().replace(/\s+/g, '-').toLowerCase() ||
        '';
      if (!h.id) h.id = id;

      const level = parseInt(h.tagName.substring(1), 10);

      const menuItem: MenuItem = {
        label: h.textContent || '',
        command: () => {
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        icon:
          level === 1
            ? 'pi pi-book'
            : level === 2
              ? 'pi pi-angle-right'
              : 'pi pi-circle',
      };

      if (level === 1) {
        tocItems.push(menuItem);
      } else {
        let parent: MenuItem | null = null;
        for (let i = level - 1; i > 0; i--) {
          if (levelStack[i - 1]) {
            parent = levelStack[i - 1];
            break;
          }
        }
        if (parent) {
          parent.items = parent.items || [];
          parent.items.push(menuItem);
        } else {
          tocItems.push(menuItem);
        }
      }

      levelStack[level - 1] = menuItem;
      for (let i = level; i < 6; i++) {
        levelStack[i] = null;
      }
    });

    const tocSection = this.model.find(m => m.label === 'Table des matières');
    if (tocSection) tocSection.items = tocItems;
  }



}
