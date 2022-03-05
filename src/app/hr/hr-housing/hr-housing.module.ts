import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrHousingRoutingModule } from './hr-housing-routing.module';
import { HrHouseListComponent } from './hr-house-list/hr-house-list.component';
import { HrHouseDetailComponent } from './hr-house-detail/hr-house-detail.component';


@NgModule({
  declarations: [
    HrHouseListComponent,
    HrHouseDetailComponent
  ],
  imports: [
    CommonModule,
    HrHousingRoutingModule
  ]
})
export class HrHousingModule { }
