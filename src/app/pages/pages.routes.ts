import { Routes } from '@angular/router';
import { Empty } from './empty/empty';

export default [
    { path: '**', redirectTo: '/notfound' }
] as Routes;
