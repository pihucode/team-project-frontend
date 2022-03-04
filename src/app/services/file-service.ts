import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FileService {

	private email = 'pinxhuang@gmail.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	uploadDoc(data: FormData, type: string) {
		const url = `http://localhost:8080/api/document/${this.email}/${type}`;
		// let headers = new HttpHeaders({
		// 	'Content-Type': 'multipart/form-data'
		// });
		// let options = { headers: headers };
		this.http.post(url, data).subscribe(response => {
			console.log('uploadDoc called!');
		});
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
		const url = `http://localhost:8080/api/documents/opt/${this.email}`;
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

}