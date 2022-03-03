import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { EmployeeAddressInfoModalContentComponent } from '../../modal-content/employee-address-info-modal-content/employee-address-info-modal-content.component';

@Component({
  selector: 'app-employee-address-info-modal',
  templateUrl: './employee-address-info-modal.component.html',
  styleUrls: ['./employee-address-info-modal.component.css']
})
export class EmployeeAddressInfoModalComponent implements OnInit {
  addressInfo: AddressInfo;

  constructor(private modalService: NgbModal, private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {
    this.profileInfoService.getAddressInfo().subscribe(addressInfo => {
      this.addressInfo = addressInfo;
    });
  }

  openAddressInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeeAddressInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.addressInfo = this.addressInfo;
  }

}
