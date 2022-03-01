import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-onboarding-applications',
	templateUrl: './onboarding-applications.component.html',
	styleUrls: ['./onboarding-applications.component.css']
})
export class OnboardingApplicationsComponent implements OnInit {
	// TODO - [Quest - OPEN] Render list of applications
	applications: string[] = ['apricot', 'banana', 'cucumber'];

	constructor() { }

	ngOnInit(): void {
		//fetch data from backend
	}

}
