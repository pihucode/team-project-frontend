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

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllHouses().subscribe(houses => {
      console.log('Successful GET of houses.');
      this.housingInfo = houses as HousingInfo[];
    }, err => {
      console.log('Error receiving list of houses info.');
      console.log(err);
    });
  }

  getDetails(index: number): void {
    console.log(index);
  }

}
