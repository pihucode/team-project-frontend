import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-personal-info-modal-content',
  templateUrl: './employee-personal-info-modal-content.component.html',
  styleUrls: ['./employee-personal-info-modal-content.component.css']
})
export class EmployeePersonalInfoModalContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
