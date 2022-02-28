import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  // TODO: Fill in endpoint
  private endpoint = 'http://localhost:9999/api/register';
  registerNewUser = (account: Account, email: string) => {
    this.http.post(this.endpoint, account, {
      responseType: 'text'
    }).subscribe(response => {
      if (response === 'true') {
        console.log('Account Registered');
        // redirect to onboarding page
        this.router.navigate(
          ['/onboarding'],
          { queryParams: { email: email } }
        );
      } else {
        console.log('Username already taken');
      }
    })
  }
}
