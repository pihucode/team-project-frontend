import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRAuthGuardGuard } from 'src/app/guards/hrauth-guard.guard';
import { HireComponent } from './hire.component';

const routes: Routes = [
  { path: 'hr/hire', component: HireComponent,
  canActivate:[HRAuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireRoutingModule { }
