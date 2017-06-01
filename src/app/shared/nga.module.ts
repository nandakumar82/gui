import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Preloader, Spinner} from './services';
import { PageHeader } from './components';

const COMPONENTS = [PageHeader];
const SERVICES = [Preloader, Spinner];
const DIRECTIVES = [];
const PIPES = [];
const VALIDATORS = [];

@NgModule({
    declarations: [
        ...PIPES,
        ...DIRECTIVES,
        ...COMPONENTS
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ...PIPES,
        ...DIRECTIVES,
        ...COMPONENTS
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: NgaModule,
            providers: [
                ...VALIDATORS,
                ...SERVICES
            ]
        }
    }
}
