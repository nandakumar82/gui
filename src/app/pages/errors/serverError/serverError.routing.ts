import {Routes, RouterModule} from '@angular/router';
import {ServerErrorComponent} from './serverError.component';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [{
    path: '',
    component: ServerErrorComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);