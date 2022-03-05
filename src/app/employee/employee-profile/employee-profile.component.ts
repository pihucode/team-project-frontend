import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressInfo, ContactInfo, EmploymentInfo, PersonalInfo, UniqueContact } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
	selector: 'app-employee-profile',
	templateUrl: './employee-profile.component.html',
	styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
	contactInfo: ContactInfo;
	employmentInfo: EmploymentInfo;
	emergencyContacts: UniqueContact[];
	references: UniqueContact[];

	// emergencyContactInfo = {
	// 	relationship: "Mother",
	// 	fullname: "Your Mom",
	// 	phone: "1113337777",
	// 	address: "123 Your Moms House"
	// }

	documentInfo = {
		document1: "SomeDoc1",
		document2: "SomeDoc2",
		document3: "SomeDoc3",
	}

	constructor(private modalService: NgbModal,
		private profileService: ProfileService,
		private profileInfoService: ProfileInfoService) { }

	ngOnInit(): void {
		// fetch data from backend
		this.profileService.getPersonalInfo().subscribe((data: PersonalInfo) => {
			this.profileInfoService.setPersonalInfo(data);
		});
		this.profileService.getAddressInfo().subscribe((data: AddressInfo) => {
			this.profileInfoService.setAddressInfo(data);
		});
		this.profileService.getContactInfo().subscribe((data: ContactInfo) => {
			this.profileInfoService.setContactInfo(data);
		});
		this.profileService.getEmploymentInfo().subscribe((data: EmploymentInfo) => {
			this.profileInfoService.setEmploymentInfo(data);
		});
		this.profileService.getEmergencyContacts().subscribe((data: UniqueContact[]) => {
			this.profileInfoService.setEmergencyContacts(data);
		});
		this.profileService.getReferences().subscribe((data: UniqueContact[]) => {
			this.profileInfoService.setReferences(data);
		});
	}

}
