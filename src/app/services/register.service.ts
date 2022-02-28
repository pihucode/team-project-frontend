import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // TODO: Fill in endpoint
  private endpoint = 'http://localhost:9999/api/register';
  registerNewUser = (account: Account) => {
    this.http.post(this.endpoint, account, {
      responseType: 'text'
    }).subscribe(response => {
      if (response === 'true') {
        console.log('Account Registered');
        // Add a redirect
      } else {
        console.log('Username already taken');
      }
    })
  }
}
