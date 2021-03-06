import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/guards/authguard.guard';
import { EmployeeFacilityReportListComponent } from './employee-facility-report-list/employee-facility-report-list.component';
import { EmployeeFacilityReportComponent } from './employee-facility-report/employee-facility-report.component';
import { EmployeeHouseInfoComponent } from './employee-house-info/employee-house-info.component';

const routes: Routes = [
  { path: 'employee/housing', component: EmployeeHouseInfoComponent, canActivate: [AuthguardGuard] },
  { path: 'employee/facility-reports', component: EmployeeFacilityReportListComponent, canActivate: [AuthguardGuard] },
  { path: 'employee/facility-report/:id', component: EmployeeFacilityReportComponent, canActivate: [AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeHousingRoutingModule { }
