import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: '400'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});