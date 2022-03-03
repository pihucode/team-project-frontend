import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeVisaComponent } from './employee-visa.component';

const routes: Routes = [
  { path: 'employee/visa', component: EmployeeVisaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeVisaRoutingModule { }
