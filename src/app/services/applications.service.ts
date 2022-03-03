import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Applications } from '../models/applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  private endpoint = 'http://localhost:8080/api/application'

  private applications: BehaviorSubject<Applications[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getApplicationsObservable = () : Observable<Applications[]> => {
    return this.applications.asObservable();
  }

  setApplicationsObservable = (val : Applications[]) => {
    this.applications.next(val);
  }

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
