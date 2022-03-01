import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employment-info-modal',
  templateUrl: './employment-info-modal.component.html',
  styleUrls: ['./employment-info-modal.component.css']
})
export class EmploymentInfoModalComponent implements OnInit {

  EmployeeInfo = {}

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openEmployeeInfoModal = (): void => {
    const modalRef = this.modalService.open(EmploymentInfoModalComponent);
    modalRef.componentInstance.personalInfo = this.EmployeeInfo;
  }

}
