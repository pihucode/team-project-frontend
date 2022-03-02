import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-document-info-modal-content',
  templateUrl: './employee-document-info-modal-content.component.html',
  styleUrls: ['./employee-document-info-modal-content.component.css']
})
export class EmployeeDocumentInfoModalContentComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
