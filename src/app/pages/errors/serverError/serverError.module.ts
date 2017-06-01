import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorComponent } from './serverError.component';
import { routing } from './serverError.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ServerErrorComponent]
})
export class ServerErrorModule { }
