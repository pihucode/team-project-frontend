import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-document-info-modal-content',
  templateUrl: './employee-document-info-modal-content.component.html',
  styleUrls: ['./employee-document-info-modal-content.component.css']
})
export class EmployeeDocumentInfoModalContentComponent implements OnInit {
  @Input()
  documentInfo

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    console.log(this.documentInfo);
    this.activeModal.close(this.documentInfo);
    // form.value sends json of edited values, need to save into backend
    console.log(form.value);
  }

  displayCancel = () => {
    if (confirm("Cancel changes?")) {
      this.activeModal.dismiss();
    }
  }

}
