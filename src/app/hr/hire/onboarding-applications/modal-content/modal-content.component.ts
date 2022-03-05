import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationInfo } from 'src/app/models/application-info';
import { Applications } from 'src/app/models/applications';
import { ApplicationsService } from 'src/app/services/applications.service';

// TODO: Import Angular Material 
// import {MatTabsModule} from '@angular/material/tabs';


@Component({
	selector: 'app-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
	@Input() 
	applicationInfo = new ApplicationInfo();

	@Input()
	email: string;

	@Input()
	applicationId: number;

	applications: Applications[];

	status: string = '';

	personalInfoForm = this.fb.group({
		comment_firstname: [''],
		comment_lastname: [''],
		comment_ssn: [''],
		comment_gender: [''],
		comment_dob: [''],
		comment_status: [''],
		comment_visatype: [''],
		comment_visastartdate: [''],
		comment_visaenddate: [''],
		comment_cellphone: ['']
	});

	constructor(public activeModal: NgbActiveModal, private applicationsService: ApplicationsService, 
		private fb: FormBuilder) { }

	ngOnInit(): void {
		this.applicationsService.getApplicationsObservable().subscribe(applications => {
			this.applications = applications;
			console.log(this.applicationId);
			this.status = this.applications[this.applicationId - 1].status;
		});
	}

	displayCancel = () => {
		if (confirm("Discard changes?")) {
		  this.activeModal.dismiss();
		}
	}

	setApprove = () => {
		this.status = 'approved';
	}

	setReject = () => {
		this.status = 'rejected';
	}

	onSubmit = () => {
		this.applicationsService.setApplicationStatus(this.applicationId, this.status).subscribe(response => {
			console.log('Application status set');
			this.applications[this.applicationId - 1].status = this.status;
		}, err => {
			console.log('Error setting application status.')
			console.log(err);
		});
		this.activeModal.dismiss();
		// TODO: Send Form Of Comments
		console.log(this.personalInfoForm.value);
	}
}
