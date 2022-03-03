import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactInfo } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-contact-info-modal-content',
  templateUrl: './employee-contact-info-modal-content.component.html',
  styleUrls: ['./employee-contact-info-modal-content.component.css']
})
export class EmployeeContactInfoModalContentComponent implements OnInit {
  @Input()
  contactInfo
  constructor(public activeModal: NgbActiveModal,
    private profileService: ProfileService,
    private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    console.log("form");
    let formData = form.value.employeeContactInfo;
    console.log(formData);
    let formContactInfo = new ContactInfo(
      formData.personalEmail,
      formData.workEmail,
      formData.cellphone,
      formData.workphone);
    this.profileService.updateContactInfo(formContactInfo);
    this.profileInfoService.setContactInfo(formContactInfo);
    this.activeModal.close(this.contactInfo);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }
}
