import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { EmployeeHomeComponent } from './home.component';

const routes: Routes = [
  { path: 'employee/home', component: EmployeeHomeComponent },
  { path: 'employee/profile', component: EmployeeProfileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeHomeRoutingModule { }
