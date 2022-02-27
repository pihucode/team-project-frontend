import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // TODO: Fill in endpoint
  private endpoint = 'http://localhost:4200/api/register';
  registerNewUser = (register: Register) => {
    this.http.post(this.endpoint, register, {
      responseType: 'text'
    })
  }
}
