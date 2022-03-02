import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-contact-info-modal-content',
  templateUrl: './employee-contact-info-modal-content.component.html',
  styleUrls: ['./employee-contact-info-modal-content.component.css']
})
export class EmployeeContactInfoModalContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
