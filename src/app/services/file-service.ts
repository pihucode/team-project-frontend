import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FileService {
	private email = 'pinxhuang@gmail.com'; //todo get from auth cookie

	constructor(private http: HttpClient) { }

	uploadDoc3(data: FormData, type: string) {
		const url = `http://localhost:8080/api/document/${this.email}/${type}`;
		// let headers = new HttpHeaders({
		// 	'Content-Type': 'multipart/form-data'
		// });
		// let options = { headers: headers };
		this.http.post(url, data).subscribe(response => {
			console.log('uploadDoc called!');
		});
	}

}