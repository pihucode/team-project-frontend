import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/guards/authguard.guard';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { EmployeeHomeComponent } from './home.component';

const routes: Routes = [
  { path: 'employee/home', component: EmployeeHomeComponent,
  canActivate:[AuthguardGuard] },
  { path: 'employee/profile', component: EmployeeProfileComponent,
  canActivate:[AuthguardGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeHomeRoutingModule { }
