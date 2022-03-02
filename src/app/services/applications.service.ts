import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private endpoint = 'http://localhost:8080/api/applications'

  constructor(private http: HttpClient) { }

  getApplications = () => {
    return this.http.get(this.endpoint);
  }
}
