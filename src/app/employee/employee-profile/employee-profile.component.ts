import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeePersonalInfoModalComponent } from './modal-container/employee-personal-info-modal/employee-personal-info-modal.component';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  personalInfo = {
    id: 123, //personId
    firstname: "john",
    lastname: "doe",
    age: 25,
    SSN: 1111111,
    DateofBirth: "1996-06-01"
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // todo - fetch data from backend (later)
  }

  openPersonalInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeePersonalInfoModalComponent);
    modalRef.componentInstance.personalInfo = this.personalInfo;
  }

}
