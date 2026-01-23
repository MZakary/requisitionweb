import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Notfound } from './app/pages/notfound/notfound';
import { RequisitionJSON } from './app/pages/RequisitionJSON/RequisitionJSON';
import { ConfirmExitGuard } from './app/pages/Guard/confirm-exit.guard';
import { Production } from './app/pages/Production/Production';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard, canDeactivate: [ConfirmExitGuard] },
            { path: 'requisition-json-externe', component: RequisitionJSON, canDeactivate: [ConfirmExitGuard] },
            { path: 'requisition-json-interne', component: RequisitionJSON, canDeactivate: [ConfirmExitGuard] },
            { path: 'requisition-json-scolaire', component: RequisitionJSON, canDeactivate: [ConfirmExitGuard] },
            { path: 'requisition-json-services', component: RequisitionJSON, canDeactivate: [ConfirmExitGuard] },
            { path: 'requisition-json-banq', component: RequisitionJSON, canDeactivate: [ConfirmExitGuard] },
            { path: 'requisition-json-hydroqc', component: RequisitionJSON, canDeactivate: [ConfirmExitGuard] },
            { path: 'requisition-json-materiel', component: RequisitionJSON, canDeactivate: [ConfirmExitGuard] },
            { path: 'production', component: Production, canDeactivate: [ConfirmExitGuard] },
            { path: 'notfound', component: Notfound, canDeactivate: [ConfirmExitGuard] },

            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    // { path: 'notfound', component: Notfound, canDeactivate: [ConfirmExitGuard] },
    { path: '**', redirectTo: '/notfound' }
];
