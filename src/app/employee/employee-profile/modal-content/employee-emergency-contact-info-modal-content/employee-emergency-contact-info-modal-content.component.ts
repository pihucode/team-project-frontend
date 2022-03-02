import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-emergency-contact-info-modal-content',
  templateUrl: './employee-emergency-contact-info-modal-content.component.html',
  styleUrls: ['./employee-emergency-contact-info-modal-content.component.css']
})
export class EmployeeEmergencyContactInfoModalContentComponent implements OnInit {
  @Input()
  emergencyContactInfo
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
