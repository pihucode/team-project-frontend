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
	personalComments: string[] = [];
	addressComments: string[] = [];
	contactComments: string[] = [];
	visaComments: string[] = [];

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

					if (res.firstname !== '') this.personalComments.push(res.firstname);
					if (res.lastname !== '') this.personalComments.push(res.lastname);
					if (res.preferredName !== '') this.personalComments.push(res.preferredName);
					if (res.ssn !== '') this.personalComments.push(res.ssn);

					if (res.street !== '') this.addressComments.push(res.street);
					if (res.city !== '') this.addressComments.push(res.city);
					if (res.state !== '') this.addressComments.push(res.state);
					if (res.zip !== '') this.addressComments.push(res.zip);

					if (res.personalEmail !== '') this.contactComments.push(res.personalEmail);
					if (res.workEmail !== '') this.contactComments.push(res.workEmail);
					if (res.cellphone !== '') this.contactComments.push(res.cellphone);
					if (res.workphone !== '') this.contactComments.push(res.workphone);

					if (res.visaType !== '') this.visaComments.push(res.visaType);
					if (res.visaStartDate !== '') this.visaComments.push(res.visaStartDate);
					if (res.visaEndDate !== '') this.visaComments.push(res.visaEndDate);

				});
			}
		});


	}

}
