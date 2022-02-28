import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { OnboardingRequest } from '../models/onboarding-models';
@Injectable({
    providedIn: 'root'
})
export class OnboardingService {

    constructor(private http: HttpClient) { }

    private endpoint = 'http://localhost:8080/api/onboard';

    onboard = (req: OnboardingRequest) => {
        this.http.post(this.endpoint, req, {
            responseType: 'text'
        }).subscribe(response => {
            console.log(response);
            // if (response === 'true') {
            //     console.log('Account Registered');
            //     // Add a redirect
            // } else {
            //     console.log('Username already taken');
            // }
        })
    }
}
