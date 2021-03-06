import { Component, OnInit } from '@angular/core';
import { Applications } from 'src/app/models/applications';
import { ApplicationsService } from 'src/app/services/applications.service';

@Component({
	selector: 'app-onboarding-applications',
	templateUrl: './onboarding-applications.component.html',
	styleUrls: ['./onboarding-applications.component.css']
})
export class OnboardingApplicationsComponent implements OnInit {
	applications: Applications[];

	constructor(private applicationsService: ApplicationsService) { }

	ngOnInit(): void {
		//fetch data from backend
		this.applicationsService.getApplications().subscribe(result => {
			this.applicationsService.setApplicationsObservable(result as Applications[]);
			this.applicationsService.getApplicationsObservable().subscribe(applications => {
				this.applications = applications;
			});
		}, err => {
			console.log('Error fetching applications.')
			console.log(err);
		})
	}

}
