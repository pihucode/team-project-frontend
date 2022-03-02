import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo, ContactInfo, EmploymentInfo, PersonalInfo } from 'src/app/models/profile-models';
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
	employmentInfo: EmploymentInfo; //todo

	emergencyContactInfo = {
		relationship: "Mother",
		fullname: "Your Mom",
		phone: "1113337777",
		address: "123 Your Moms House"
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
