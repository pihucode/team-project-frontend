import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getHouseByEmail = (email: string) => {
    const url = `http://localhost:8080/api/house/${email}`;
    return this.http.get(url);
  }

  getHouseById = (id: number) => {
    const url = `http://localhost:8080/api/houses/${id}`;
    return this.http.get(url);
  }

  getAllHouses = () => {
    const url = 'http://localhost:8080/api/houses';
    return this.http.get(url);
  }

  getAllReports = () => {
    const url = `http://localhost:8080/api/facility-reports`;
    return this.http.get(url);
  }

  postReportByEmail = (email: string, report) => {
    const url = `http://localhost:8080/api/facility-report/${email}`;
    return this.http.post(url, report, {responseType: 'text'});
  }

}
