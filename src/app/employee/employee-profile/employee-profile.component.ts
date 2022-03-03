import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo, ContactInfo, EmploymentInfo, PersonalInfo } from 'src/app/models/profile-models';
import { AddressInfoService } from 'src/app/services/address-info.service';
import { PersonalInfoService } from 'src/app/services/personal-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
	selector: 'app-employee-profile',
	templateUrl: './employee-profile.component.html',
	styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
	contactInfo: ContactInfo;
	employmentInfo: EmploymentInfo;

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
		private profileService: ProfileService, private addressInfoService: AddressInfoService, 
		private personalInfoService: PersonalInfoService) { }

	ngOnInit(): void {
		// fetch data from backend
		this.profileService.getPersonalInfo().subscribe((data: PersonalInfo) => {
			this.personalInfoService.setPersonalInfo(data);
		});
		this.profileService.getAddressInfo().subscribe((data: AddressInfo) => {
			this.addressInfoService.setAddressInfo(data);
		});
		this.profileService.getContactInfo().subscribe((data: ContactInfo) => {
			this.contactInfo = data;
		});
		this.profileService.getEmploymentInfo().subscribe((data: EmploymentInfo) => {
			this.employmentInfo = data;
		});
	}

}
