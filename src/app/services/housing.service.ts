import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddFacilityReport, AddHouseRequest } from '../models/housing-models';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // private email = sessionStorage.getItem('email');

  constructor(private http: HttpClient) { }

  getHouseByEmail = () => {
    let email = sessionStorage.getItem('email');
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

  getResidentsByHouseId = (id: number) => {
    const url = `http://localhost:8080/api/house/residents/${id}`;
    return this.http.get(url);
  }

  getAllReports = () => {
    const url = `http://localhost:8080/api/facility-reports`;
    return this.http.get(url);
  }
  getPotentialLandlords() {
    const url = `http://localhost:8080/api/landlords/potential`;
    return this.http.get(url);
  }
  getAllReportsByEmail() {
    let email = sessionStorage.getItem('email');
    const url = `http://localhost:8080/api/facility-reports/email/${email}`;
    return this.http.get(url);
  }

  getAllReportsByHouse(houseId: number) {
    const url = `http://localhost:8080/api/facility-reports/house/${houseId}`;
    return this.http.get(url);
  }

  postReportByEmail = (email: string, report) => {
    const url = `http://localhost:8080/api/facility-report/${email}`;
    return this.http.post(url, report, { responseType: 'text' });
  }

  addHouse(houseReq: AddHouseRequest) {
    const url = `http://localhost:8080/api/add-house`;
    this.http.post(url, houseReq).subscribe(res => {
      console.log('addHouse called!');
    })
  }
  addReport(report: AddFacilityReport) {
    let email = sessionStorage.getItem('email');
    const url = `http://localhost:8080/api/facility-report/${email}`;
    this.http.post(url, report).subscribe(res => {
      console.log('addReport called!');
    })
  }

}
