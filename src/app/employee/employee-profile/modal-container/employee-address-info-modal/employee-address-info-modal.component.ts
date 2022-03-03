import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo } from 'src/app/models/profile-models';
import { AddressInfoService } from 'src/app/services/address-info.service';
import { EmployeeAddressInfoModalContentComponent } from '../../modal-content/employee-address-info-modal-content/employee-address-info-modal-content.component';

@Component({
  selector: 'app-employee-address-info-modal',
  templateUrl: './employee-address-info-modal.component.html',
  styleUrls: ['./employee-address-info-modal.component.css']
})
export class EmployeeAddressInfoModalComponent implements OnInit {
  addressInfo: AddressInfo;
  
  constructor(private modalService: NgbModal, private addressInfoService: AddressInfoService) { }

  ngOnInit(): void {
    this.addressInfoService.getAddressInfo().subscribe(addressInfo => {
      this.addressInfo = addressInfo;
    });
  }

  openAddressInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeeAddressInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.addressInfo = this.addressInfo;
  }

}
