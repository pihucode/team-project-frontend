import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-employment-info-modal-content',
  templateUrl: './employee-employment-info-modal-content.component.html',
  styleUrls: ['./employee-employment-info-modal-content.component.css']
})
export class EmployeeEmploymentInfoModalContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
