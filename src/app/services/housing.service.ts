import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  postReportByEmail = (email: string, report) => {
    const url = `http://localhost:8080/api/facility-report/${email}`;
    return this.http.post(url, report, {responseType: 'text'});
  }
}
