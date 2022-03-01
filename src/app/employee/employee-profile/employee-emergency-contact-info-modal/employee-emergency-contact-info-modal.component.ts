import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-emergency-contact-info-modal',
  templateUrl: './employee-emergency-contact-info-modal.component.html',
  styleUrls: ['./employee-emergency-contact-info-modal.component.css']
})
export class EmployeeEmergencyContactInfoModalComponent implements OnInit {

  EmgencyContactInfo={}

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openEmgencyContactInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeeEmergencyContactInfoModalComponent);
    modalRef.componentInstance.personalInfo = this.EmgencyContactInfo;
  }
}
