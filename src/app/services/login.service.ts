import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpoint = 'http://localhost:9999/api/login';

  constructor(private http: HttpClient) { }

  attemptLogin = (account: Account) => {
    return this.http.post(this.endpoint, account, {
      responseType: 'text'
    });
  }

  getUserEmail = (username: string) => {
    const url = `http://localhost:9999/api/user-email/${username}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
