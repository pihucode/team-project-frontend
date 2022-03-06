import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingInfo, Landlord } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-hr-house-list',
  templateUrl: './hr-house-list.component.html',
  styleUrls: ['./hr-house-list.component.css']
})
export class HrHouseListComponent implements OnInit {
  housingInfo: HousingInfo[] = [];
  landlords: Landlord[] = [];
  // facilityInfo: FacilityInfo[] = [];
  // employeeInfo = []; object: {name, phone, email, car}
  addHouseForm = this.fb.group({
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    furniture: this.fb.group({
      beds: [0, Validators.required],
      mattresses: [0, Validators.required],
      tables: [0, Validators.required],
      chairs: [0, Validators.required]
    }),
    landlord: ['', Validators.required],
    numPeople: [0, Validators.required]
  });

  // landlords: string[] = ['guy1', 'guy2', 'guy3'];

  constructor(private housingService: HousingService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.housingService.getPotentialLandlords().subscribe((data: Landlord[]) => {
      this.landlords = data;
    });

    this.housingService.getAllHouses().subscribe(houses => {
      console.log('Successful GET of houses.');
      this.housingInfo = houses as HousingInfo[];
    }, err => {
      console.log('Error receiving list of houses info.');
      console.log(err);
      this.housingInfo = [
        {
          id: 1,
          address: 'address',
          landlord: 'landlord',
          landlordEmail: 'email',
          landlordPhone: 1,
          numPeople: 1
        },
        {
          id: 2,
          address: 'address',
          landlord: 'landlord',
          landlordEmail: 'email',
          landlordPhone: 1,
          numPeople: 1
        },
        {
          id: 3,
          address: 'address',
          landlord: 'landlord',
          landlordEmail: 'email',
          landlordPhone: 1,
          numPeople: 1
        },
      ];
    });
  }

  getDetails(houseId: number): void {
    this.router.navigate(['hr/house/' + houseId]);
  }

  onSubmit = () => {
    console.log(this.addHouseForm.value);
  }
}
