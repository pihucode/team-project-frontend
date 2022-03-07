import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmergencyContactList, ReferenceList } from '../models/onboarding-models';
import { AddressInfo, ContactInfo, EmploymentInfo, PersonalInfo, UniqueContact, UniqueContactList } from '../models/profile-models';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	// private email = sessionStorage.getItem('email');
	// private email2 = 'test2@mailinator.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	getPersonalInfo() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/personal-info?email=${email}`
		return this.http.get(url);
	}
	getAddressInfo() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/address-info?email=${email}`
		return this.http.get(url);
	}
	getContactInfo() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/contact-info?email=${email}`
		return this.http.get(url);
	}
	getEmploymentInfo() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/employment-info?email=${email}`
		return this.http.get(url);
	}
	getReferences() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/references/${email}`;
		return this.http.get(url);
	}
	getReferencesByEmail(email: string) {
		const url = `http://localhost:8080/api/employee/profile/references/${email}`;
		return this.http.get(url);
	}
	getEmergencyContacts() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/emergency-contacts/${email}`;
		return this.http.get(url);
	}
	getEmergencyContactsByEmail(email: string) {
		const url = `http://localhost:8080/api/employee/profile/emergency-contacts/${email}`;
		return this.http.get(url);
	}

	updatePersonalInfo(req: PersonalInfo) {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/personal-info/${email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updatePersonalInfo called!');
		})
	}
	updateAddressInfo(req: AddressInfo) {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/address-info/${email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateAddressInfo called!');
		})
	}
	updateContactInfo(req: ContactInfo) {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/contact-info/${email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateContactInfo called!');
		})
	}
	updateEmploymentInfo(req: EmploymentInfo) {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/employee/profile/employment-info/${email}`;
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