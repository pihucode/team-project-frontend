import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireRoutingModule } from './hire-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateTokenComponent } from './generate-token/generate-token.component';


@NgModule({
  declarations: [
    GenerateTokenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HireRoutingModule
  ]
})
export class HireModule { }
