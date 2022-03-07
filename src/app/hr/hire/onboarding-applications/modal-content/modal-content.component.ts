import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationInfo } from 'src/app/models/application-info';
import { Applications } from 'src/app/models/applications';
import { UniqueContact } from 'src/app/models/profile-models';
import { ApplicationsService } from 'src/app/services/applications.service';
import { FileService } from 'src/app/services/file-service';
import { ProfileService } from 'src/app/services/profile.service';

// TODO: Import Angular Material 
// import {MatTabsModule} from '@angular/material/tabs';


@Component({
	selector: 'app-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit, OnChanges {
	// @Input()
	// applicationInfo = new ApplicationInfo();
	applicationInfo: ApplicationInfo;

	@Input()
	email: string;

	@Input()
	applicationId: number;

	applications: Applications[];

	status: string = '';
	emergencyContacts: UniqueContact[];
	references: UniqueContact[];
	filenames: string[];

	personalInfoForm = this.fb.group({
		// personal info
		firstname: [''],
		lastname: [''],
		preferredName: [''],
		ssn: [''],
		// comment_dob: [''],
		// comment_gender: [''],

		// address
		street: [''],
		city: [''],
		state: [''],
		zip: [''],

		// contact info
		personalEmail: [''],
		workEmail: [''],
		cellphone: [''],
		workphone: [''],

		//visa info
		// comment_status: [''],
		visaType: [''],
		visaStartDate: [''],
		visaEndDate: [''],

		// contacts and docs
		emergencyContacts: [''],
		references: [''],
		documents: [''],

		//whole app
		general: ['']
	});

	constructor(public activeModal: NgbActiveModal,
		private applicationsService: ApplicationsService,
		private profileService: ProfileService,
		private fileService: FileService,
		private fb: FormBuilder) { }

	ngOnInit(): void {

		console.log(this.email);

		this.applicationsService.getApplicationById(this.applicationId).subscribe((result: ApplicationInfo) => {
			this.applicationInfo = result;
		});

		this.applicationsService.getApplicationsObservable().subscribe(applications => {
			this.applications = applications;
			// console.log(this.applicationId);
			this.status = this.applications[this.applicationId - 1].status;
		});
		this.profileService.getEmergencyContactsByEmail(this.email).subscribe((data: UniqueContact[]) => {
			this.emergencyContacts = data;
		});
		this.profileService.getReferencesByEmail(this.email).subscribe((data: UniqueContact[]) => {
			this.references = data;
		});
		this.fileService.getMandatoryDocsByEmail(this.email).subscribe((data: string[]) => {
			this.filenames = data;
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		// if (changes['email'] && changes['email'].currentValue) {
		// 	let validEmail: string = changes['email'].currentValue;
		// 	console.log(validEmail);
		// 	console.log(this.email);
		// 	this.profileService.getEmergencyContactsByEmail(validEmail).subscribe((data: UniqueContact[]) => {
		// 		this.emergencyContacts = data;
		// 	});
		// 	this.profileService.getReferencesByEmail(validEmail).subscribe((data: UniqueContact[]) => {
		// 		this.references = data;
		// 	});
		// 	this.fileService.getMandatoryDocsByEmail(validEmail).subscribe((data: string[]) => {
		// 		this.filenames = data;
		// 	});
		// }
	}

	handleDocDownload(filename: string) {
		this.fileService.downloadDoc(filename);
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
		});
		console.log(this.personalInfoForm.value);
		// TODO: Send Form Of Comments
		this.applicationsService.setApplicationComments(this.applicationId, this.personalInfoForm.value).subscribe(res => {
			console.log('Successful post of comments to endpoint.')
		});
		this.activeModal.dismiss();

	}
}
