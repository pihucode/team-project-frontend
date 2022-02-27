import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private endpoint = 'http://localhost:8080/api/login';
  attemptLogin = (login: Login) => {
    this.http.post(this.endpoint, login, {
      responseType: 'text'
    })
  }
}
