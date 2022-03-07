import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FileService {

	// private email = sessionStorage.getItem('email');

	constructor(private http: HttpClient) { }

	uploadDoc(data: FormData, type: string) {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/document/${email}/${type}`;
		// let headers = new HttpHeaders({
		// 	'Content-Type': 'multipart/form-data'
		// });
		// let options = { headers: headers };
		return this.http.post(url, data);
	}

	uploadDocToEmail(data: FormData, type: string, email: string) {
		const url = `http://localhost:8080/api/document/${email}/${type}`;
		this.http.post(url, data).subscribe(response => {
			console.log('uploadDocToEmail called!');
		});
	}

	downloadDoc(filename: string) {
		const url = `http://localhost:8080/api/file/download/${filename}`;
		window.open(url, "_blank");
	}

	getOptDocs() {
		let email = sessionStorage.getItem('email');
		const url = `http://localhost:8080/api/documents/opt/${email}`;
		return this.http.get(url);
	}

	getOptDocsByEmail(email: string) {
		const url = `http://localhost:8080/api/documents/opt/${email}`;
		return this.http.get(url);
	}

	getFileName(email: string, type: string) {
		const url = `http://localhost:8080/api/documents/opt/${email}/${type}`;
		return this.http.get(url);
	}
	getMandatoryDocsByEmail(email: string) {
		const url = `http://localhost:8080/api/documents/mandatory/${email}`;
		return this.http.get(url);
	}

}