import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRAuthGuardGuard } from 'src/app/guards/hrauth-guard.guard';
import { VisaComponent } from './visa.component';

const routes: Routes = [
  { path: 'hr/visa', component: VisaComponent,
  canActivate:[HRAuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaRoutingModule { }
