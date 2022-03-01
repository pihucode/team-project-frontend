import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-personal-info-modal',
  templateUrl: './employee-personal-info-modal.component.html',
  styleUrls: ['./employee-personal-info-modal.component.css']
})
export class EmployeePersonalInfoModalComponent implements OnInit {
  @Input() personalInfo;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openPersonalInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeePersonalInfoModalComponent);
    modalRef.componentInstance.personalInfo = this.personalInfo;
  }

}
