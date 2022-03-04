import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRAuthGuardGuard } from 'src/app/guards/hrauth-guard.guard';
import { HrHomeComponent } from './home.component';

const routes: Routes = [
  { path: 'hr/home', component: HrHomeComponent,
  canActivate:[HRAuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrHomeRoutingModule { }
