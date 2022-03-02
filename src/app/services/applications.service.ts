import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private endpoint = 'http://localhost:8080/api/application'

  constructor(private http: HttpClient) { }

  getApplications = () => {
    return this.http.get(this.endpoint + 's');
  }

  getApplicationById = (id: number) => {
    return this.http.get(this.endpoint + '-info?applicationId=' + id);
  }

  setApplicationStatus = (id: number, status: string) => {
    return this.http.post(this.endpoint + '-status?applicationId=' + id + '&status=' + status, null);
  }
}
