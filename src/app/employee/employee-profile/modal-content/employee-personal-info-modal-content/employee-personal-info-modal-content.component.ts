import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-personal-info-modal-content',
  templateUrl: './employee-personal-info-modal-content.component.html',
  styleUrls: ['./employee-personal-info-modal-content.component.css']
})
export class EmployeePersonalInfoModalContentComponent implements OnInit {
  @Input()
  public personalInfo;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    console.log(this.personalInfo);
    this.activeModal.close(this.personalInfo);
    // form.value sends json of edited values, need to save into backend
    console.log(form.value);
  }

  displayCancel = () => {
    if (confirm("Cancel changes?")) {
      this.activeModal.dismiss();
    }
  }
}
