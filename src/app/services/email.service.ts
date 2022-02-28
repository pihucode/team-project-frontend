import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailMessage } from '../models/EmailMessage';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private endpoint = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) { }

  // sendEmail(to: string, subject: string, text: string): void {
  //   console.log("sending mail to endpoint");
  //   this.http.post(this.endpoint, { to, subject, text });
  // }

  sendEmail = (msg: EmailMessage) => {
    console.log(msg);
    this.http.post(this.endpoint, msg, {
      responseType: 'text'
    }).subscribe(response => {
      console.log(response);
    });
  }

}
