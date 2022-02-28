import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { OnboardingRequest } from '../models/onboarding-models';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class OnboardingService {

    constructor(private http: HttpClient,
        private router: Router) { }

    private endpoint = 'http://localhost:8080/api/onboard';

    onboard = (req: OnboardingRequest) => {
        this.http.post(this.endpoint, req, {
            responseType: 'text'
        }).subscribe(response => {
            console.log('onboard form submitted!');
            console.log(response);
            this.router.navigate(['employee/home'])
        })
    }
}
