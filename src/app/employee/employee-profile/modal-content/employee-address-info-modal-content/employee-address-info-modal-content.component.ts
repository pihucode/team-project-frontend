import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo } from 'src/app/models/profile-models';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-address-info-modal-content',
  templateUrl: './employee-address-info-modal-content.component.html',
  styleUrls: ['./employee-address-info-modal-content.component.css']
})
export class EmployeeAddressInfoModalContentComponent implements OnInit {
  @Input()
  addressInfo

  constructor(public activeModal: NgbActiveModal,
    private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    // console.log(this.addressInfo);
    // console.log(form.value);
    let formData = form.value.addressInfo;
    let formAddressInfo = new AddressInfo(
      formData.street,
      formData.city,
      formData.state,
      formData.zip);
    this.profileService.updateAddressInfo(formAddressInfo);
    this.activeModal.close(this.addressInfo);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }

}
