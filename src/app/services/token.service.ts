import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private endpoint = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) { }

  generateToken = (email: string) => {
    this.http.post(this.endpoint, email, {
      responseType: 'json'
    }).subscribe(response => {
      console.log(response);
    });
  }
}
