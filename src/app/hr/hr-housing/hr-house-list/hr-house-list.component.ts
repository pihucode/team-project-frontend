import { Component, OnInit } from '@angular/core';
import { HousingInfo } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-hr-house-list',
  templateUrl: './hr-house-list.component.html',
  styleUrls: ['./hr-house-list.component.css']
})
export class HrHouseListComponent implements OnInit {
  housingInfo: HousingInfo[] = [];
  // facilityInfo: FacilityInfo[] = [];
  // employeeInfo = []; object: {name, phone, email, car}
  email: string = 'some@email.com';

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    // TODO: fetch data from backend
    this.housingService.getAllHouses().subscribe(houses => {
      console.log('Successful GET of houses.');
      // this.housingInfo = houses;
    }, err => {
      console.log('Error receiving list of houses info.');
      console.log(err);
    });

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
