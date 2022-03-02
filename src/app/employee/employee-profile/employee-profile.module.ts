import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeePersonalInfoModalContentComponent } from './modal-content/employee-personal-info-modal-content/employee-personal-info-modal-content.component';
import { EmployeeEmploymentInfoModalContentComponent } from './modal-content/employee-employment-info-modal-content/employee-employment-info-modal-content.component';
import { EmployeeEmergencyContactInfoModalContentComponent } from './modal-content/employee-emergency-contact-info-modal-content/employee-emergency-contact-info-modal-content.component';
import { EmployeeDocumentInfoModalContentComponent } from './modal-content/employee-document-info-modal-content/employee-document-info-modal-content.component';
import { EmployeeContactInfoModalContentComponent } from './modal-content/employee-contact-info-modal-content/employee-contact-info-modal-content.component';
import { EmployeeAddressInfoModalContentComponent } from './modal-content/employee-address-info-modal-content/employee-address-info-modal-content.component';


@NgModule({
  declarations: [
    EmployeePersonalInfoModalContentComponent,
    EmployeeEmploymentInfoModalContentComponent,
    EmployeeEmergencyContactInfoModalContentComponent,
    EmployeeDocumentInfoModalContentComponent,
    EmployeeContactInfoModalContentComponent,
    EmployeeAddressInfoModalContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeProfileModule { }
