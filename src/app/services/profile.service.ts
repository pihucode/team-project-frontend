import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/auth-models';
import { AddressInfo, ContactInfo, PersonalInfo } from '../models/profile-models';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	private email = 'test1@mail.com'; //todo get from auth cookie

	constructor(private http: HttpClient, private authService: AuthService) { }

	fetchCurrentUserEmail() {
		this.authService.getCurrentUser().subscribe((data: User) => {
			this.email = data.email;
		});
	}

	getPersonalInfo() {
		this.fetchCurrentUserEmail();
		const url = `http://localhost:8080/api/employee/profile/personal-info?email=${this.email}`
		return this.http.get(url);
	}
	getAddressInfo() {
		this.fetchCurrentUserEmail();
		const url = `http://localhost:8080/api/employee/profile/address-info?email=${this.email}`
		return this.http.get(url);
	}
	getContactInfo() {
		this.fetchCurrentUserEmail();
		const url = `http://localhost:8080/api/employee/profile/contact-info?email=${this.email}`
		return this.http.get(url);
	}
	getEmploymentInfo() {
		this.fetchCurrentUserEmail();
		const url = `http://localhost:8080/api/employee/profile/employment-info?email=${this.email}`
		return this.http.get(url);
	}
	updatePersonalInfo(req: PersonalInfo) {
		this.fetchCurrentUserEmail();
		const url = `http://localhost:8080/api/employee/profile/personal-info/${this.email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('setAddressInfo called!');
		})
	}
	updateAddressInfo(req: AddressInfo) {
		this.fetchCurrentUserEmail();
		const url = `http://localhost:8080/api/employee/profile/address-info/${this.email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateAddressInfo called!');
		})
	}
	updateContactInfo(req: ContactInfo) {
		this.fetchCurrentUserEmail();
		const url = `http://localhost:8080/api/employee/profile/contact-info/${this.email}`;
		this.http.post(url, req).subscribe(response => {
			console.log('updateContactInfo called!');
		})
	}
}