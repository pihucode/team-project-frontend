import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeContactInfoModalContentComponent } from '../../modal-content/employee-contact-info-modal-content/employee-contact-info-modal-content.component';

@Component({
  selector: 'app-employee-contact-info-modal',
  templateUrl: './employee-contact-info-modal.component.html',
  styleUrls: ['./employee-contact-info-modal.component.css']
})
export class EmployeeContactInfoModalComponent implements OnInit {
  @Input()
  contactInfo

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openContactInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeeContactInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.contactInfo = this.contactInfo;
  }

}
