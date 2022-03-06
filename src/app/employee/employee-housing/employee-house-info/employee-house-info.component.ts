import { Component, OnInit } from '@angular/core';
import { HousingInfo } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-employee-house-info',
  templateUrl: './employee-house-info.component.html',
  styleUrls: ['./employee-house-info.component.css']
})
export class EmployeeHouseInfoComponent implements OnInit {
  house = new HousingInfo();
  roommates = [
    { name: 'Ted', phone: 1293128344 }, // email, car?
    { name: 'Fred', phone: 2139129933 }
  ];
  email: string = 'some@email.com';
  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    // TODO: getß email
    // this.email = 

    // GET employee house info from backend
    this.housingService.getHouseByEmail(this.email).subscribe(house => {
      console.log('Received house information!')
      // this.house = house;
    }, err => {
      console.log('Error receiving house info.');
      console.log(err);
    });

    // TODO: Delete this after receiving from backend
    this.house = {
      id: 0,
      address: '34 Valley View Drive',
      landlordName: 'LZDHR',
      landlordPhone: 6094011666,
      landlordEmail: 'some@email.com',
      numPeople: 100
    };
  }
}
