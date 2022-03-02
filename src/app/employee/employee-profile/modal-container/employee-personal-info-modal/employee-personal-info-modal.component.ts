import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeePersonalInfoModalContentComponent } from '../../modal-content/employee-personal-info-modal-content/employee-personal-info-modal-content.component';

@Component({
  selector: 'app-employee-personal-info-modal',
  templateUrl: './employee-personal-info-modal.component.html',
  styleUrls: ['./employee-personal-info-modal.component.css']
})
export class EmployeePersonalInfoModalComponent implements OnInit {
  @Input()
  personalInfo;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openPersonalInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeePersonalInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.personalInfo = this.personalInfo;
  }

}
