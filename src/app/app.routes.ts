import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.Portfolio) },
    { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
    { path: 'item', loadComponent: () => import('./pages/item/item').then(m => m.Item) },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
