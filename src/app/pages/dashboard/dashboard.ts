import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.scss'],
  template: `
    <div class="card">
      <h1>Page Principal</h1>
      <p>
        Veuillez choisir un type de réquisition dans le menu à gauche.
        Cliquez ou appuyez sur L pour ceux qui utilisent JAWS afin d'atteindre la liste du menu
      </p>
    </div>
  `
})
export class Dashboard implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Dashboard component initialized');
    (window as any).electronAPI.setDashboardState(true);
  }

  ngOnDestroy() {
    (window as any).electronAPI.setDashboardState(false);
  }
}