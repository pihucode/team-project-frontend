import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	// private email = 'pinxhuang@gmail.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	getEmployeeList() {
		const url = `http://localhost:8080/api/employee/profile/employment-visa-info`
		return this.http.get(url);
	}
}