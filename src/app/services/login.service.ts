import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private endpoint = 'http://localhost:9999/api/login';


  attemptLogin = (login: Login) => {
    return this.http.post(this.endpoint, login, {
      responseType: 'text'
      // remove entire .subscribe part and return type is observable, not safesubscriber
    }).subscribe(response => {
      console.log(response);
      // can see 'hr', 'employee', 'invalid' response here
      return response
    });
  }
}
