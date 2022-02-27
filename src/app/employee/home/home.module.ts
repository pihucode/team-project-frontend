import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeHomeRoutingModule } from './home-routing.module';
import { EmployeeHomeComponent } from './home.component';


@NgModule({
  declarations: [
    EmployeeHomeComponent
  ],
  imports: [
    CommonModule,
    EmployeeHomeRoutingModule
  ]
})
export class EmployeeHomeModule { }
