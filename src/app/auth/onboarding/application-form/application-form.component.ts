import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnboardingRequest, Person, Visa } from 'src/app/models/onboarding-models';
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
			preferredName: [''],
			ssn: ['', Validators.required],
			birthdate: this.fb.group({
				day: [''],
				month: [''],
				year: ['']
			}),
			gender: [''],
			hasDriverLicense: [false],
		}),
		addressInfo: this.fb.group({
			street: [''],
			city: [''],
			state: [''],
			zip: ['']
		}),
		contactInfo: this.fb.group({
			personalEmail: [''],
			workEmail: [''],
			cellPhone: ['', Validators.required],
			workPhone: ['', Validators.required],
		}),
		visaInfo: this.fb.group({
			// residentType: [''],
			// workAuthorization: [''],
			type: [''],
			workDateStart: [''],
			workDateEnd: [''],
		}),
		carInfo: this.fb.group({
			maker: [''],
			model: [''],
			color: ['']
		}),
		emergencyContactsArray: this.fb.array([
			this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				phone: ['', Validators.required],
				email: ['', Validators.required],
				relationship: ['', Validators.required]
			}),
			this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				phone: ['', Validators.required],
				email: ['', Validators.required],
				relationship: ['', Validators.required]
			})
		])
	});
	// form1: FormGroup;
	// formArray1: FormArray;

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

	get emergencyContactsArray(): FormArray {
		return this.applicationForm.get('emergencyContactsArray') as FormArray;
	}

	addEmergencyContact(): void {
		this.applicationForm.value.emergencyContactsArray.push(
			this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				phone: ['', Validators.required],
				email: ['', Validators.required],
				relationship: ['', Validators.required]
			})
		);
	}

	onPermanentResidentChange(): void {
		this.isPermanentResident = !this.isPermanentResident;
		// if (this.isPermanentResident) this.applicationForm.value.visaInfo.workAuthorization = '';
		// else this.applicationForm.value.visaInfo.residentType = '';
	}

	onSubmit(): void {
		console.log(this.applicationForm.value);
		// let personalInfoData = this.applicationForm.value.personalInfo;
		// let secondaryInfoData = this.applicationForm.value.secondaryInfo;
		// let person: Person = new Person(
		// 	personalInfoData.firstName,
		// 	personalInfoData.lastName,
		// 	this.email,
		// 	secondaryInfoData.cellPhone,
		// 	personalInfoData.gender,
		// 	personalInfoData.ssn
		// );
		// let visa: Visa = new Visa(
		// 	personalInfoData.workAuthorization, //todo
		// 	personalInfoData.workDateStart,
		// 	personalInfoData.workDateEnd
		// );
		// let onboardingRequest = new OnboardingRequest(
		// 	person,
		// 	visa
		// );
		// this.onboardingService.onboard(onboardingRequest);
	}

}
