import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnboardingRequest } from 'src/app/models/onboarding-models';
import { OnboardingService } from 'src/app/services/onboarding.service';

@Component({
	selector: 'app-application-form',
	templateUrl: './application-form.component.html',
	styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
	// TODO - pre populate email
	email: string;

	isPermanentResident: boolean = false;

	workAuthorizationTypes: string[] = ['H1-B', 'L2', 'F1 (CPT/OPT)', 'H4', 'Other'];

	applicationForm = this.fb.group({
		personalInfo: this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			middleName: [''],
			nickName: [''],
			ssn: ['', Validators.required],
			birthdate: this.fb.group({
				day: [''],
				month: [''],
				year: ['']
			}),
			gender: [''],
			residentType: [''],
			workAuthorization: [''],
			hasDriverLicense: [false],
		}),
		secondaryInfo: this.fb.group({
			cellPhone: ['', Validators.required],
			workPhone: ['', Validators.required],
			// currentAddress: this.fb.group({}),
			carInfo: this.fb.group({
				maker: [''],
				model: [''],
				color: ['']
			}),
		}),
		// emergencyContactsInfo: this.fb.array([
		// 	this.fb.group({
		// 		firstName: ['', Validators.required],
		// 		lastName: ['', Validators.required],
		// 		middleName: [''],
		// 		phone: ['', Validators.required],
		// 		email: ['', Validators.required],
		// 		relationship: ['', Validators.required]
		// 	})
		// ]),
	})

	constructor(private fb: FormBuilder,
		private onboardingService: OnboardingService,
		private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(
			(params) => {
				this.email = params['email'];
			}
		)
	}

	onPermanentResidentChange(): void {
		this.isPermanentResident = !this.isPermanentResident;
		if (this.isPermanentResident) this.applicationForm.value.personalInfo.workAuthorization = '';
		else this.applicationForm.value.personalInfo.residentType = '';
	}

	onSubmit(): void {
		console.log(this.applicationForm.value);
		let personalInfoData = this.applicationForm.value.personalInfo;
		let secondaryInfoData = this.applicationForm.value.secondaryInfo;
		let onboardingRequest = new OnboardingRequest(
			personalInfoData.firstName,
			personalInfoData.lastName,
			this.email,
			secondaryInfoData.cellPhone,
			personalInfoData.gender,
			personalInfoData.ssn
		);
		this.onboardingService.onboard(onboardingRequest);

	}

}
