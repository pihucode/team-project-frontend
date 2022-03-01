import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  personalInfo = {
    firstname: "john",
    lastname: "doe"
  }

  constructor() { }

  ngOnInit(): void {
    // todo - fetch data from backend (later)
  }

  editPersonalInfo = (): void => {
    console.log('editPersonalInfo called!');
  }

}
