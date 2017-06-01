import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pageNotFound.component';
import { routing } from './pageNotFound.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
