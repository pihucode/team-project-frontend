import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor(private http: HttpClient) { }

	getEmployeeList() {
		const url = `http://localhost:8080/api/employee/profile/employment-visa-info`;
		return this.http.get(url);
	}

	getEmployeeDetailById(id: number) {
		const url = `http://localhost:8080/api/employee/detail/${id}`;
		return this.http.get(url);
	}

	getVisaList() {
		const url = `http://localhost:8080/api/visas`;
		return this.http.get(url);
	}
}