import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrHousingComponent } from './hr-housing.component';

const routes: Routes = [
  { path: 'hr/housing', component: HrHousingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrHousingRoutingModule { }
