import { Component, OnInit } from '@angular/core';
import { HousingInfo } from 'src/app/models/housing-models';

@Component({
  selector: 'app-hr-house-list',
  templateUrl: './hr-house-list.component.html',
  styleUrls: ['./hr-house-list.component.css']
})
export class HrHouseListComponent implements OnInit {
  housingInfo: HousingInfo[] = [];
  // facilityInfo: FacilityInfo[] = [];
  // employeeInfo = []; object: {name, phone, email, car}

  constructor() { }

  ngOnInit(): void {
    // TODO: fetch data from backend
    this.housingInfo = [
      {address: '34 Valley View Drive', landlord: 'LZDHR', phone: 6094011666, email: 'some@email.com', personCount: 100},
      {address: '123 ave Princeton, NJ, 00001', landlord: 'LIOCL', phone: 6094011666, email: 'some@email.com', personCount: 5},
      {address: '92 East Cemetery Road, Appleton, WI 54911', landlord: 'BHDTR', phone: 6012313364, email: 'some@email.com', personCount: 3},
      {address: '122 West Ave', landlord: 'ASFAS', phone: 2123941212, email: 'some@email.com', personCount: 2}
    ];
  }

  getDetails(index: number): void {
    console.log(index);
  }

}
