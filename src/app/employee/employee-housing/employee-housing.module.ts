import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeHousingRoutingModule } from './employee-housing-routing.module';
import { EmployeeHouseInfoComponent } from './employee-house-info/employee-house-info.component';
import { EmployeeFacilityReportListComponent } from './employee-facility-report-list/employee-facility-report-list.component';
import { EmployeeFacilityReportComponent } from './employee-facility-report/employee-facility-report.component';
import { EmployeeHousingComponent } from './employee-housing.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeHouseInfoComponent,
    EmployeeFacilityReportListComponent,
    EmployeeFacilityReportComponent,
    EmployeeHousingComponent
  ],
  imports: [
    CommonModule,
    EmployeeHousingRoutingModule,
    FormsModule
  ]
})
export class EmployeeHousingModule { }
