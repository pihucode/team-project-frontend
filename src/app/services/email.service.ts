import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  private endpoint = 'http://localhost:8080/api/email';
  sendEmail(to: string, subject: string, text: string): void {
    this.http.post(this.endpoint, { to, subject, text });
  }
}
