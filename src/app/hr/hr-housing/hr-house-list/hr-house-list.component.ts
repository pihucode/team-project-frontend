import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddHouseRequest, HousingInfo, Landlord } from 'src/app/models/housing-models';
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
		});
	}

	getDetails(houseId: number): void {
		this.router.navigate(['hr/house/' + houseId]);
	}

	onSubmit = () => {
		console.log(this.addHouseForm.value);
		let data = this.addHouseForm.value;
		let houseRequest = new AddHouseRequest(
			data.address.street,
			data.address.city,
			data.address.state,
			data.address.zip,
			data.furniture.beds,
			data.furniture.mattresses,
			data.furniture.tables,
			data.furniture.chairs,
			data.landlord,
			data.numPeople
		);
		this.housingService.addHouse(houseRequest);
		// this.onboardingService.onboard(onboardingRequest, this.getFormData(), this.email);

	}
}
