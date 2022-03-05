import { Component, OnInit } from '@angular/core';
import { HousingInfo } from 'src/app/models/housing-models';

@Component({
  selector: 'app-employee-house-info',
  templateUrl: './employee-house-info.component.html',
  styleUrls: ['./employee-house-info.component.css']
})
export class EmployeeHouseInfoComponent implements OnInit {
  house = new HousingInfo();
  roommates = [
    {name: 'Ted', phone: 1293128344}, // email, car?
    {name: 'Fred', phone: 2139129933} 
  ];
  constructor() { }

  ngOnInit(): void {
    // TODO: get employee house info from backend
    this.house = {
      address: '34 Valley View Drive', 
      landlord: 'LZDHR', phone: 6094011666, 
      email: 'some@email.com', 
      personCount: 100};

    // TODO: get employee roommate info
  }

}
