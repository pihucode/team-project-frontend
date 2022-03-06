import { Component, OnInit } from '@angular/core';
import { HousingInfo, Resident } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-employee-house-info',
  templateUrl: './employee-house-info.component.html',
  styleUrls: ['./employee-house-info.component.css']
})
export class EmployeeHouseInfoComponent implements OnInit {
  house: HousingInfo;
  residents: Resident[];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    // GET employee house info from backend
    this.housingService.getHouseByEmail().subscribe((house: HousingInfo) => {
      this.house = house;

      // get residents
      this.housingService.getResidentsByHouseId(house.id).subscribe((data: Resident[]) => {
        this.residents = data;
      });
    });
  }
}
