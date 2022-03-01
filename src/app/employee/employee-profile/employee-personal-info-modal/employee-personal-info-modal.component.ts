import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-personal-info-modal',
  templateUrl: './employee-personal-info-modal.component.html',
  styleUrls: ['./employee-personal-info-modal.component.css']
})
export class EmployeePersonalInfoModalComponent implements OnInit {
  @Input() personalInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
