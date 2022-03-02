import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	private email = 'test1@mail.com'; //todo get from auth cookie

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
}