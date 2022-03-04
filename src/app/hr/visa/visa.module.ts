import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VisaRoutingModule } from './visa-routing.module';
import { VisaComponent } from './visa.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';

import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    VisaComponent,
    VisaStatusManagementComponent
  ],
  imports: [
    CommonModule,
    VisaRoutingModule,
    MatTableModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ]
})
export class VisaModule { }
