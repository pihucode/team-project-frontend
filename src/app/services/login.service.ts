import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  private endpoint = 'http://localhost:9999/api/login';


  attemptLogin = (account: Account) => {
    this.http.post(this.endpoint, account, {
      responseType: 'text'
    }).subscribe(response => {
      console.log(response);
      if (response == "hr") {
        this.router.navigate(['hr/home'])
      } else if (response == "employee") {
        this.router.navigate(['employee/home'])
      } else {
        // No redirection, login failed
        console.log('Login Failed');
      }
    });
  }

}
