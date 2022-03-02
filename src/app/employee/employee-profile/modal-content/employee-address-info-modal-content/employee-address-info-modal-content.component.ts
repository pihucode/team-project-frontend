import { Component, Input, OnInit } from '@angular/core';
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

}
