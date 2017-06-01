import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './pageNotFound.component';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [{
    path: '',
    component: PageNotFoundComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);