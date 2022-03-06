import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmergencyContactList, ReferenceList } from '../models/onboarding-models';
import { AddressInfo, ContactInfo, EmploymentInfo, PersonalInfo, UniqueContact, UniqueContactList } from '../models/profile-models';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	private email = 'pinxhuang@gmail.com'; //todo get from auth cookie
	// private email2 = 'test2@mailinator.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	getPersonalInfo() {
		const url = `http://localhost:8080/api/employee/profile/personal-info?email=${this.email}`
		return this.http.get(url);
	}
	getAddressInfo() {
		const url = `http://localhost:8080/api/employee/profile/address-info?email=${this.email}`
		return this.http.get(url);
	}
	getContactInfo() {
		const url = `http://localhost:8080/api/employee/profile/contact-info?email=${this.email}`
		return this.http.get(url);
	}
	getEmploymentInfo() {
		const url = `http://localhost:8080/api/employee/profile/employment-info?email=${this.email}`
		return this.http.get(url);
	}
	getReferences() {
		const url = `http://localhost:8080/api/employee/profile/references/${this.email}`;
		return this.http.get(url);
	}
	getEmergencyContacts() {
		const url = `http://localhost:8080/api/employee/profile/emergency-contacts/${this.email}`;
		return this.http.get(url);
	}

	updatePersonalInfo(req: PersonalInfo) {
		const url = `http://localhost:8080/api/employee/profile/personal-info/${this.email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updatePersonalInfo called!');
		})
	}
	updateAddressInfo(req: AddressInfo) {
		const url = `http://localhost:8080/api/employee/profile/address-info/${this.email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateAddressInfo called!');
		})
	}
	updateContactInfo(req: ContactInfo) {
		const url = `http://localhost:8080/api/employee/profile/contact-info/${this.email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateContactInfo called!');
		})
	}
	updateEmploymentInfo(req: EmploymentInfo) {
		const url = `http://localhost:8080/api/employee/profile/employment-info/${this.email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateEmploymentInfo called!');
		})
	}
	updateReferences(req: UniqueContactList) {
		const url = `http://localhost:8080/api/employee/profile/references`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateReferences called!');
		})
	}
	updateEmergencyContacts(req: UniqueContactList) {
		const url = `http://localhost:8080/api/employee/profile/emergency-contacts`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateEmergencyContacts called!');
		})
	}
}