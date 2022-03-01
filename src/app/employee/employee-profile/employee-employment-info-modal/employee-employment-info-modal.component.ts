import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-employee-employment-info-modal',
  templateUrl: './employee-employment-info-modal.component.html',
  styleUrls: ['./employee-employment-info-modal.component.css']
})
export class EmployeeEmploymentInfoModalComponent implements OnInit {
  EmploymentInfo = {}
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openEmploymentInfoModal = (): void => {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.personalInfo = this.EmploymentInfo;
  }
}
