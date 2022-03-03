import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VisaRoutingModule } from './visa-routing.module';
import { VisaComponent } from './visa.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    VisaComponent,
    VisaStatusManagementComponent
  ],
  imports: [
    CommonModule,
    VisaRoutingModule,
    MatTableModule,
    FormsModule
  ]
})
export class VisaModule { }
