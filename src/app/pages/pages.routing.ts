import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {ModuleWithProviders} from '@angular/core';

export const routes:Routes = [{
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
}, {
    path: '400',
    loadChildren: 'app/pages/errors/pageNotFound/pageNotFound.module#PageNotFoundModule'
}, {
    path: 'home',
    component: PagesComponent,
    loadChildren: 'app/pages/home/home.module#HomeModule'
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);