import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { EmployeeListComponent } from './employee-list.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ProfileTableComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatTableModule,
    MatInputModule
  ]
})
export class EmployeeListModule { }
