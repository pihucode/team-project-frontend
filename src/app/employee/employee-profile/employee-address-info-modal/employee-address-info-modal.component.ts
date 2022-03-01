import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-employee-address-info-modal',
  templateUrl: './employee-address-info-modal.component.html',
  styleUrls: ['./employee-address-info-modal.component.css']
})
export class EmployeeAddressInfoModalComponent implements OnInit {

  AddressInfo = {}

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddressInfoModal = (): void => {
    const modalRef = this.modalService.open(ModalContentComponent, { centered: true });
    modalRef.componentInstance.personalInfo = this.AddressInfo;
  }

}
