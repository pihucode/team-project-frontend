import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRAuthGuardGuard } from 'src/app/guards/hrauth-guard.guard';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list.component';

const routes: Routes = [
  { path: 'hr/employee-list', component: EmployeeListComponent,
  canActivate:[HRAuthGuardGuard]
  },
  { path: 'hr/employee-detail/:id', component: EmployeeDetailComponent,
  canActivate:[HRAuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRoutingModule { }
