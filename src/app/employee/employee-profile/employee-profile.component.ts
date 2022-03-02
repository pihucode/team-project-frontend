import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeePersonalInfoModalComponent } from './modal-container/employee-personal-info-modal/employee-personal-info-modal.component';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  personalInfo = {
    id: 123, //personId
    firstname: "john",
    lastname: "doe",
    age: 25,
    ssn: 1111111,
    dob: "1996-06-01"
  }

  contactInfo = {
    personalEmail: "personal@gmail.com",
    workEmail: "work@gmail.com",
    cellphone: "1234567890",
    workphone: "0987654321"
  }

  addressInfo = {
    addressLine1: "1 Address Line",
    addressLine2: "2 Address Line",
    city: "City",
    state: "State"
  }

  emergencyContactInfo = {
    relationship: "Mother",
    fullname: "Your Mom",
    phone: "1113337777",
    address: "123 Your Moms House"
  }

  employmentInfo = {
    workAuth: "H4",
    authStart: "2021-12-26",
    authEnd: "2022-12-29",
    employmentStart: "2020-03-29",
    employmentEnd: "2021-03-29"
  }

  documentInfo = {
    document1: "SomeDoc1",
    document2: "SomeDoc2",
    document3: "SomeDoc3",
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // todo - fetch data from backend (later)
  }

}
