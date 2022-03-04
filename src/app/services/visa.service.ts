import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from '../models/general-models';

@Injectable({
	providedIn: 'root'
})
export class VisaService {
	private email = 'pinxhuang@gmail.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	getVisaInfo() {
		const url = `http://localhost:8080/api/visa/${this.email}`;
		return this.http.get(url);
	}

	getOptStage() {
		const url = `http://localhost:8080/api/visa/opt-stage/${this.email}/1`;
		return this.http.get(url);
	}

	uploadDoc(doc: Document) {
		const url = `http://localhost:8080/api/document/${this.email}`;
		this.http.post(url, doc).subscribe(response => {
			console.log('uploadDoc called!');
			console.log(doc);
		});
	}

	// getEmployeeDetailById(id: number) {
	// 	const url = `http://localhost:8080/api/employee/detail/${id}`;
	// 	return this.http.get(url);
	// }
}