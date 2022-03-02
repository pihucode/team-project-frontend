import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo, ContactInfo, PersonalInfo } from 'src/app/models/profile-models';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
	selector: 'app-employee-profile',
	templateUrl: './employee-profile.component.html',
	styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
	personalInfo: PersonalInfo;
	contactInfo: ContactInfo; //todo
	addressInfo: AddressInfo; //todo

	emergencyContactInfo = {
		relationship: "Mother",
		fullname: "Your Mom",
		phone: "1113337777",
		address: "123 Your Moms House"
	}

	employmentInfo = {
		workAuth: "H4",
		authStart: "2021-12-26",
		authEnd: "2022-12-29",
		employmentStart: "2020-03-29",
		employmentEnd: "2021-03-29"
	}

	documentInfo = {
		document1: "SomeDoc1",
		document2: "SomeDoc2",
		document3: "SomeDoc3",
	}

	constructor(private modalService: NgbModal,
		private profileService: ProfileService) { }

	ngOnInit(): void {
		// todo - fetch data from backend
		this.profileService.getPersonalInfo().subscribe((data: PersonalInfo) => {
			this.personalInfo = data;
		});
	}

}
