import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getCurrentUser = () => {
    let url = 'http://localhost:8080/api/current-user';
    return this.http.get(url);
  }
}
