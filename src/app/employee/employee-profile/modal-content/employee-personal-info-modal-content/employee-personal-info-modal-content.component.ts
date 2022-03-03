import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonalInfo } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-personal-info-modal-content',
  templateUrl: './employee-personal-info-modal-content.component.html',
  styleUrls: ['./employee-personal-info-modal-content.component.css']
})
export class EmployeePersonalInfoModalContentComponent implements OnInit {
  personalInfo: PersonalInfo;

  constructor(public activeModal: NgbActiveModal, private personalInfoService: ProfileInfoService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.personalInfoService.getPersonalInfo().subscribe(personalInfo => {
      this.personalInfo = personalInfo;
    });
  }

  onSubmit = (form: NgForm) => {
    let formData = form.value.personalInfo;
    let formPersonalInfo = new PersonalInfo(
      formData.firstname,
      formData.lastname,
      formData.preferredname,
      this.personalInfo.age,
      formData.ssn);
    this.profileService.updatePersonalInfo(formPersonalInfo);
    this.personalInfoService.setPersonalInfo(formPersonalInfo);
    this.activeModal.close(this.personalInfo);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }
}
