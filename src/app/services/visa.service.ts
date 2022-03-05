import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentFile } from '../models/general-models';
import { Visa } from '../models/onboarding-models';

@Injectable({
	providedIn: 'root'
})
export class VisaService {
	private email = 'pinxhuang@gmail.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	getVisaList() {
		const url = `http://localhost:8080/api/visas`;
		return this.http.get(url);
	}

	getVisaInfo() {
		const url = `http://localhost:8080/api/visa/${this.email}`;
		return this.http.get(url);
	}

	getOptStage() {
		const url = `http://localhost:8080/api/visa/opt-stage/${this.email}`;
		return this.http.get(url);
	}

	updateVisaById = (id: number, visa: Visa) => {
		const url = `http://localhost:8080/api/Visa-updateById?personId=${id}`;
		return this.http.post(url, visa);
	}
}