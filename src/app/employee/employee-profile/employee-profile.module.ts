import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeProfileComponent } from './employee-profile.component';

import { EmployeePersonalInfoModalContentComponent } from './modal-content/employee-personal-info-modal-content/employee-personal-info-modal-content.component';
import { EmployeeEmploymentInfoModalContentComponent } from './modal-content/employee-employment-info-modal-content/employee-employment-info-modal-content.component';
import { EmployeeEmergencyContactInfoModalContentComponent } from './modal-content/employee-emergency-contact-info-modal-content/employee-emergency-contact-info-modal-content.component';
import { EmployeeDocumentInfoModalContentComponent } from './modal-content/employee-document-info-modal-content/employee-document-info-modal-content.component';
import { EmployeeContactInfoModalContentComponent } from './modal-content/employee-contact-info-modal-content/employee-contact-info-modal-content.component';
import { EmployeeAddressInfoModalContentComponent } from './modal-content/employee-address-info-modal-content/employee-address-info-modal-content.component';

import { EmployeeEmploymentInfoModalComponent } from './modal-container/employee-employment-info-modal/employee-employment-info-modal.component';
import { EmployeePersonalInfoModalComponent } from './modal-container/employee-personal-info-modal/employee-personal-info-modal.component';
import { EmployeeEmergencyContactInfoModalComponent } from './modal-container/employee-emergency-contact-info-modal/employee-emergency-contact-info-modal.component';
import { EmployeeDocumentInfoModalComponent } from './modal-container/employee-document-info-modal/employee-document-info-modal.component';
import { EmployeeContactInfoModalComponent } from './modal-container/employee-contact-info-modal/employee-contact-info-modal.component';
import { EmployeeAddressInfoModalComponent } from './modal-container/employee-address-info-modal/employee-address-info-modal.component';


@NgModule({
  declarations: [
    EmployeePersonalInfoModalContentComponent,
    EmployeeEmploymentInfoModalContentComponent,
    EmployeeEmergencyContactInfoModalContentComponent,
    EmployeeDocumentInfoModalContentComponent,
    EmployeeContactInfoModalContentComponent,
    EmployeeAddressInfoModalContentComponent,

    EmployeePersonalInfoModalComponent,
    EmployeeEmploymentInfoModalComponent,
    EmployeeEmergencyContactInfoModalComponent,
    EmployeeDocumentInfoModalComponent,
    EmployeeContactInfoModalComponent,
    EmployeeAddressInfoModalComponent,

    EmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [
    EmployeePersonalInfoModalContentComponent
  ]
})
export class EmployeeProfileModule { }
