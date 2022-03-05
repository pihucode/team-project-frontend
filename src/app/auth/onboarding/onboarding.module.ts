import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ApplicationStatusComponent } from './application-status/application-status.component';



@NgModule({
  declarations: [
    ApplicationFormComponent,
    ApplicationStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
