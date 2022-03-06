import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrHouseDetailComponent } from './hr-house-detail/hr-house-detail.component';
import { HrHousingComponent } from './hr-housing.component';

const routes: Routes = [
  { path: 'hr/housing', component: HrHousingComponent},
  { path: 'hr/house/:id', component: HrHouseDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrHousingRoutingModule { }
