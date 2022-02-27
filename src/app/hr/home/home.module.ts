import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrHomeRoutingModule } from './home-routing.module';
import { HrHomeComponent } from './home.component';


@NgModule({
  declarations: [
    HrHomeComponent
  ],
  imports: [
    CommonModule,
    HrHomeRoutingModule
  ]
})
export class HrHomeModule { }
