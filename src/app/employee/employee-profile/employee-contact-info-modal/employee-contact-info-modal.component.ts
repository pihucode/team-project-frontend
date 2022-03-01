import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-contact-info-modal',
  templateUrl: './employee-contact-info-modal.component.html',
  styleUrls: ['./employee-contact-info-modal.component.css']
})
export class EmployeeContactInfoModalComponent implements OnInit {
  ContactInfo = {
    
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openContactInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeeContactInfoModalComponent);
    modalRef.componentInstance.personalInfo = this.ContactInfo;
  }

}
