import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    //imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    styleUrls: ['./dashboard.scss'],
    template: `
        <div class="card">
            <h1>Page Principal</h1>
            <p>Veuillez choisir un type de réquisition dans le menu à gauche. Cliquez ou appuyez sur L pour ceux qui utilise jaws afin d'atteindre la liste du menu</p>
        </div>
    `
})
export class Dashboard {}
