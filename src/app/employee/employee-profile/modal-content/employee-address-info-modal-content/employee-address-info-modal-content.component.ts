import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-address-info-modal-content',
  templateUrl: './employee-address-info-modal-content.component.html',
  styleUrls: ['./employee-address-info-modal-content.component.css']
})
export class EmployeeAddressInfoModalContentComponent implements OnInit {
  @Input()
  addressInfo

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    console.log(this.addressInfo);
    this.activeModal.close(this.addressInfo);
    // form.value sends json of edited values, need to save into backend
    console.log(form.value);
  }

  displayCancel = () => {
    if (confirm("Cancel changes?")) {
      this.activeModal.dismiss();
    }
  }

}
