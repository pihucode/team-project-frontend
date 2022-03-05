import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrHousingRoutingModule } from './hr-housing-routing.module';
import { HrHousingComponent } from './hr-housing.component';
import { HrHouseListComponent } from './hr-house-list/hr-house-list.component';


@NgModule({
  declarations: [
    HrHousingComponent,
    HrHouseListComponent
  ],
  imports: [
    CommonModule,
    HrHousingRoutingModule
  ]
})
export class HrHousingModule { }
