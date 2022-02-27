import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireRoutingModule } from './hire-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateTokenComponent } from './generate-token/generate-token.component';
import { HireComponent } from './hire.component';
import { OnboardingApplicationsComponent } from './onboarding-applications/onboarding-applications.component';
import { ApplicationModalComponent } from './onboarding-applications/application-modal/application-modal.component';


@NgModule({
  declarations: [
    GenerateTokenComponent,
    HireComponent,
    OnboardingApplicationsComponent,
    ApplicationModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HireRoutingModule
  ]
})
export class HireModule { }
