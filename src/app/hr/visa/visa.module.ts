import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaRoutingModule } from './visa-routing.module';
import { VisaComponent } from './visa.component';


@NgModule({
  declarations: [
    VisaComponent
  ],
  imports: [
    CommonModule,
    VisaRoutingModule
  ]
})
export class VisaModule { }
