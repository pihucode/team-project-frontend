import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-onboarding-applications',
	templateUrl: './onboarding-applications.component.html',
	styleUrls: ['./onboarding-applications.component.css']
})
export class OnboardingApplicationsComponent implements OnInit {
	applications: string[] = ['apricot', 'banana', 'cucumber'];

	constructor() { }

	ngOnInit(): void {
	}

}
