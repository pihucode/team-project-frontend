import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentFile } from '../models/general-models';
import { Visa } from '../models/onboarding-models';

@Injectable({
	providedIn: 'root'
})
export class VisaService {
	// private email = sessionStorage.getItem('email');

	constructor(private http: HttpClient) { }

	getVisaList() {
		const url = `http://localhost:8080/api/visas`;
		return this.http.get(url);
	}

	getVisaInfo() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/visa/${email}`;
		return this.http.get(url);
	}

	getOptStage() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/visa/opt-stage/${email}`;
		return this.http.get(url);
	}

	updateVisaById = (id: number, visa: Visa) => {
		const url = `http://localhost:8080/api/Visa-updateById?personId=${id}`;
		return this.http.post(url, visa);
	}
}