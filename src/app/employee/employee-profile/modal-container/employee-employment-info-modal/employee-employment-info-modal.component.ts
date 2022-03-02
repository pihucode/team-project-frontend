import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeEmploymentInfoModalContentComponent } from '../../modal-content/employee-employment-info-modal-content/employee-employment-info-modal-content.component';

@Component({
  selector: 'app-employee-employment-info-modal',
  templateUrl: './employee-employment-info-modal.component.html',
  styleUrls: ['./employee-employment-info-modal.component.css']
})
export class EmployeeEmploymentInfoModalComponent implements OnInit {
  @Input()
  employmentInfo
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openEmploymentInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeeEmploymentInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.employmentInfo = this.employmentInfo;
  }
}
