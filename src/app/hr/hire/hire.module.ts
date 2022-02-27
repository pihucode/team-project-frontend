import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireRoutingModule } from './hire-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateTokenComponent } from './generate-token/generate-token.component';
import { HireComponent } from './hire.component';
import { OnboardingApplicationsComponent } from './onboarding-applications/onboarding-applications.component';
import { ModalContainerComponent } from './onboarding-applications/modal-container/modal-container.component';
import { ModalContentComponent } from './onboarding-applications/modal-content/modal-content.component';


@NgModule({
  declarations: [
    GenerateTokenComponent,
    HireComponent,
    OnboardingApplicationsComponent,
    ModalContainerComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HireRoutingModule
  ]
})
export class HireModule { }
