import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationInfo } from 'src/app/models/application-info';
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
	applicationId: number = -1;

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
	}

	displayCancel = () => {
		if (confirm("Discard changes?")) {
		  this.activeModal.dismiss();
		}
	}

	setApprove = () => {
		this.status = 'approved'
	}

	setReject = () => {
		this.status = 'rejected'
	}

	onSubmit = () => {
		console.log('status is=' + this.status);
		this.applicationsService.setApplicationStatus(this.applicationId, this.status).subscribe(response => {
			console.log(response);
		});
		this.activeModal.dismiss();
		console.log(this.personalInfoForm.value);
	}
}
