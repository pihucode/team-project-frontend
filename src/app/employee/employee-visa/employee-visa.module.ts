import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeVisaRoutingModule } from './employee-visa-routing.module';
import { VisaManagementComponent } from './visa-management/visa-management.component';
import { EmployeeVisaComponent } from './employee-visa.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VisaManagementComponent,
    EmployeeVisaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeVisaRoutingModule
  ]
})
export class EmployeeVisaModule { }
