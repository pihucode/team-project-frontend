import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/guards/authguard.guard';
import { EmployeeVisaComponent } from './employee-visa.component';

const routes: Routes = [
  { path: 'employee/visa', component: EmployeeVisaComponent ,
  canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeVisaRoutingModule { }
