import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailMessage } from '../models/email-message';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private endpoint = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) { }

  sendEmail = (msg: EmailMessage) => {
    // console.log(msg);
    this.http.post(this.endpoint, msg, {
      responseType: 'text'
    }).subscribe(response => {
      console.log(response);
    }, err => {
      console.log('Error with sending email.');
      console.log(err);
    });
  }

}
