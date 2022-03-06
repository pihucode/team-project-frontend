import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacilityInfo, FacilityReport, HousingInfo } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-hr-house-detail',
  templateUrl: './hr-house-detail.component.html',
  styleUrls: ['./hr-house-detail.component.css']
})
export class HrHouseDetailComponent implements OnInit {
  id: number = undefined;
  house = new HousingInfo();
  facility = new FacilityInfo();
  reports: FacilityReport[] = [];

  employees = [
    {
      name: 'name1',
      phone: 12812938,
      email: 'e@mail.com',
      car: 'Car1'
    }, 
    {
      name: 'name2',
      phone: 1231413355,
      email: 'e@mail.com',
      car: 'Car2'
    }
  ];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.housingService.getHouseById(this.id).subscribe(res => {
        this.house = res as HousingInfo;
      }, err => {
        console.log('Error getting house info by id.');
        console.log(err);
        this.house = {
          id: this.id, 
          address: 'address', 
          landlord: 'landlord', 
          landlordEmail: 'email', 
          landlordPhone: 1234567890, 
          numPeople: 1
        };
      });
      // TODO: GET FACILITY INFO
      // this.service.get().subscribe(res => {
      //   this.facility = res as FacilityInfo;
      // }, err => {
      //   console.log('Error getting facility info.');
      //   console.log(err);
      // });
      this.facility = {beds: 1, mattresses: 1, tables: 1, chairs: 1};

      // TODO: GET FACILITY REPORT
      // this.service.get().subscribe(res => {
      //   this.reports = res as FacilityReport[];
      // }, err => {
      //   console.log('Error getting facility info.');
      //   console.log(err);
      // });
      this.reports = [new FacilityReport('title1','dec1','some1','2022-12-12','Close'), 
      new FacilityReport('title2','dec2', 'some2','2021-12-12','Open')];

      // TODO: GET REPORT COMMENTS (MAKE PART OF FACILITY REPORT CLASS???)

      // TODO: GET EMPLOYEE LIST
    });
  }

}
