import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-employment-info-modal-content',
  templateUrl: './employee-employment-info-modal-content.component.html',
  styleUrls: ['./employee-employment-info-modal-content.component.css']
})
export class EmployeeEmploymentInfoModalContentComponent implements OnInit {
  @Input()
  employmentInfo

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    console.log(this.employmentInfo);
    this.activeModal.close(this.employmentInfo);
    // form.value sends json of edited values, need to save into backend
    console.log(form.value);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }
}
