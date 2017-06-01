import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from './home.component';
import { routing } from './home.routing';


const DECLARATIONS = [Home];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [...DECLARATIONS],
  providers: []
})
export class HomeModule { }
