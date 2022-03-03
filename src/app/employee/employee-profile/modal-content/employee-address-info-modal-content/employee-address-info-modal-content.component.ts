import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo } from 'src/app/models/profile-models';
import { AddressInfoService } from 'src/app/services/address-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-address-info-modal-content',
  templateUrl: './employee-address-info-modal-content.component.html',
  styleUrls: ['./employee-address-info-modal-content.component.css']
})
export class EmployeeAddressInfoModalContentComponent implements OnInit {
  addressInfo: AddressInfo;

  constructor(public activeModal: NgbActiveModal,
    private profileService: ProfileService, private addressInfoService: AddressInfoService) { }

  ngOnInit(): void {
    this.addressInfoService.getAddressInfo().subscribe(addressInfo => {
      this.addressInfo = addressInfo;
    });
  }

  onSubmit = (form: NgForm) => {
    let formData = form.value.addressInfo;
    let formAddressInfo = new AddressInfo(
      formData.street,
      formData.city,
      formData.state,
      formData.zip);
    this.profileService.updateAddressInfo(formAddressInfo);
    this.addressInfoService.setAddressInfo(formAddressInfo);
    this.activeModal.close(this.addressInfo);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }

}
