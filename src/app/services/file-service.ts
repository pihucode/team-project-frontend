import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FileService {
	private email = 'pinxhuang@gmail.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	uploadFile() {
		// const url = `http://localhost:8080/api/visa/${this.email}`;
		// return this.http.get(url);
	}

	// getEmployeeDetailById(id: number) {
	// 	const url = `http://localhost:8080/api/employee/detail/${id}`;
	// 	return this.http.get(url);
	// }
}