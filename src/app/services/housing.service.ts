import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddHouseRequest } from '../models/housing-models';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private email = sessionStorage.getItem('email');

  constructor(private http: HttpClient) { }

  getHouseByEmail = () => {
    const url = `http://localhost:8080/api/house/${this.email}`;
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

  postReportByEmail = (email: string, report) => {
    const url = `http://localhost:8080/api/facility-report/${this.email}`;
    return this.http.post(url, report, { responseType: 'text' });
  }
  addHouse(houseReq: AddHouseRequest) {
    const url = `http://localhost:8080/api/add-house`;
    this.http.post(url, houseReq).subscribe(res => {
      console.log('addHouse called!');
    })
  }

}
