import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingInfo } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-hr-house-detail',
  templateUrl: './hr-house-detail.component.html',
  styleUrls: ['./hr-house-detail.component.css']
})
export class HrHouseDetailComponent implements OnInit {
  id: number = undefined;
  house = new HousingInfo();

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.housingService.getHouseById(this.id).subscribe(res => {
        this.house = res as HousingInfo;
      }, err => {
        console.log('Error getting house detail by id.');
        console.log(err);
        this.house.id = this.id;
        this.house.address = 'address';
        this.house.landlord = 'landlord';
        this.house.landlordEmail = 'email';
        this.house.landlordPhone = 1234567890;
        this.house.numPeople = 1;
      });
    });
  }

}
