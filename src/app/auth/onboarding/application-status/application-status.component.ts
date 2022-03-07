import { Component, OnInit } from '@angular/core';
import { AppCommentRequest } from 'src/app/models/application-info';
import { PersonalInfo } from 'src/app/models/profile-models';
import { ApplicationsService } from 'src/app/services/applications.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
	selector: 'app-application-status',
	templateUrl: './application-status.component.html',
	styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
	status: string = '';
	// TODO: set comments;
	comment?: AppCommentRequest;

	constructor(private applicationsService: ApplicationsService) { }

	ngOnInit(): void {
		// fetch data from backend
		this.applicationsService.getApplicationStatus().subscribe((data: string) => {
			this.status = data;
			sessionStorage.setItem('status', data);

			if (data === 'rejected') {

				// get Application's Comments
				this.applicationsService.getApplicationComments().subscribe((res: AppCommentRequest) => {
					this.comment = res;
				});
			}
		});


	}

}
