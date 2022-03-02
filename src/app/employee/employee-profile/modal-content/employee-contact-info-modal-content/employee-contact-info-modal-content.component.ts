import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-contact-info-modal-content',
  templateUrl: './employee-contact-info-modal-content.component.html',
  styleUrls: ['./employee-contact-info-modal-content.component.css']
})
export class EmployeeContactInfoModalContentComponent implements OnInit {
  @Input()
  contactInfo
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    console.log(this.contactInfo);
    this.activeModal.close(this.contactInfo);
    // form.value sends json of edited values, need to save into backend
    console.log(form.value);
  }

  displayCancel = () => {
    if (confirm("Cancel changes?")) {
      this.activeModal.dismiss();
    }
  }
}
