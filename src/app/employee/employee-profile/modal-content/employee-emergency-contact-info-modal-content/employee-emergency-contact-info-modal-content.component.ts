import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSubmit = (form: NgForm) => {
    console.log(this.emergencyContactInfo);
    this.activeModal.close(this.emergencyContactInfo);
    // form.value sends json of edited values, need to save into backend
    console.log(form.value);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }

}
