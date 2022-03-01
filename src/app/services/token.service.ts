import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private endpoint = 'http://localhost:8080/api/generate-token?email=';

  constructor(private http: HttpClient) { }


  generateToken = (email: string): Observable<Token> => {
    return this.http.post<Token>(this.endpoint + email, {
      responseType: 'json'
    });
  }
}
