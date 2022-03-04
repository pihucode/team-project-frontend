import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmploymentInfo } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-employment-info-modal-content',
  templateUrl: './employee-employment-info-modal-content.component.html',
  styleUrls: ['./employee-employment-info-modal-content.component.css']
})
export class EmployeeEmploymentInfoModalContentComponent implements OnInit {
  @Input()
  employmentInfo

  workAuthorizationTypes: string[] = ['H1-B', 'L2', 'F1 (CPT/OPT)', 'H4', 'Other'];

  constructor(public activeModal: NgbActiveModal,
    private profileService: ProfileService,
    private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {
    this.profileInfoService.getEmploymentInfo().subscribe(employmentInfo => {
      this.employmentInfo = employmentInfo;
    });
  }

  onSubmit = (form: NgForm) => {
    let formData = form.value.employmentInfo;
    console.log(formData.workAuth);
    console.log(formData.authStart);
    console.log(formData.authEnd);
    let formEmploymentInfo = new EmploymentInfo(
      formData.workAuth,
      formData.authStart,
      formData.authEnd
    );
    this.profileService.updateEmploymentInfo(formEmploymentInfo);
    this.profileInfoService.setEmploymentInfo(formEmploymentInfo);
    this.activeModal.close(this.employmentInfo);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }
}
