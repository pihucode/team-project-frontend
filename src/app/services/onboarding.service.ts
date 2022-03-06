import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnboardingRequest } from '../models/onboarding-models';
import { Router } from '@angular/router';
import { FileService } from './file-service';
@Injectable({
    providedIn: 'root'
})
export class OnboardingService {

    constructor(private http: HttpClient,
        private router: Router,
        private fileService: FileService) { }

    private endpoint = 'http://localhost:8080/api/onboard';

    onboard = (req: OnboardingRequest, formData: FormData, email: string) => {
        var self = this;
        this.http.post(this.endpoint, req, { responseType: 'text' }).subscribe(response => {
            self.fileService.uploadDocToEmail(formData, 'mandatory', email);
            sessionStorage.setItem('status', 'pending');
            self.router.navigate(['employee/home']);
        })
    }
}
