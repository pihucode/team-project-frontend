import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRAuthGuardGuard } from 'src/app/guards/hrauth-guard.guard';
import { HrHouseDetailComponent } from './hr-house-detail/hr-house-detail.component';
import { HrHousingComponent } from './hr-housing.component';

const routes: Routes = [
  { path: 'hr/housing', component: HrHousingComponent, canActivate: [HRAuthGuardGuard] },
  { path: 'hr/house/:id', component: HrHouseDetailComponent, canActivate: [HRAuthGuardGuard] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrHousingRoutingModule { }
