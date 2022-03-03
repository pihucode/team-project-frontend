import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonalInfo } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { EmployeePersonalInfoModalContentComponent } from '../../modal-content/employee-personal-info-modal-content/employee-personal-info-modal-content.component';

@Component({
  selector: 'app-employee-personal-info-modal',
  templateUrl: './employee-personal-info-modal.component.html',
  styleUrls: ['./employee-personal-info-modal.component.css']
})
export class EmployeePersonalInfoModalComponent implements OnInit {
  personalInfo: PersonalInfo;

  constructor(private modalService: NgbModal, private personalInfoService: ProfileInfoService) { }

  ngOnInit(): void {
    this.personalInfoService.getPersonalInfo().subscribe(personalInfo => {
      this.personalInfo = personalInfo;
    })
  }

  openPersonalInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeePersonalInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.personalInfo = this.personalInfo;
  }

}
