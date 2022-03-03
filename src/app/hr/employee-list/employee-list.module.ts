import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { EmployeeListComponent } from './employee-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [
    ProfileTableComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatInputModule
  ]
})
export class EmployeeListModule { }
