import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { RequisitionJSON } from './app/pages/RequisitionJSON/RequisitionJSON';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'requisition-json-externe', component: RequisitionJSON },
            { path: 'requisition-json-interne', component: RequisitionJSON },
            { path: 'requisition-json-scolaire', component: RequisitionJSON },
            { path: 'requisition-json-services', component: RequisitionJSON },
            { path: 'requisition-json-banq', component: RequisitionJSON },
            { path: 'requisition-json-hydroqc', component: RequisitionJSON },
            { path: 'requisition-json-materiel', component: RequisitionJSON },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
