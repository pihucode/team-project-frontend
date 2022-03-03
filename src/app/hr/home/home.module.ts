import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrHomeRoutingModule } from './home-routing.module';
import { HrHomeComponent } from './home.component';
import { StatusTrackingTableComponent } from './status-tracking-table/status-tracking-table.component';


@NgModule({
  declarations: [
    HrHomeComponent,
    StatusTrackingTableComponent
  ],
  imports: [
    CommonModule,
    HrHomeRoutingModule
  ]
})
export class HrHomeModule { }
