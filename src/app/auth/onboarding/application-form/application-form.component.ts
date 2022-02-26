import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-application-form',
	templateUrl: './application-form.component.html',
	styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
	// TODO - pre populate email
	email: string = "user@mail.com";

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
			residentType: ['', Validators.required],
			workAuthorization: ['', Validators.required],
			hasDriverLicense: [false, Validators.required],
		}),
		secondaryInfo: this.fb.group({
			ceilPhone: ['', Validators.required],
			workPhone: ['', Validators.required],
			// currentAddress: this.fb.group({}),
			carInfo: this.fb.group({
				maker: [''],
				model: [''],
				color: ['']
			}),
		}),
		emergencyContactsInfo: this.fb.array([
			this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				middleName: [''],
				phone: ['', Validators.required],
				email: ['', Validators.required],
				relationship: ['', Validators.required]
			})
		]),
	})

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
	}

	onPermanentResidentChange(): void {
		this.isPermanentResident = !this.isPermanentResident;
		if (this.isPermanentResident) this.applicationForm.value.personalInfo.workAuthorization = '';
		else this.applicationForm.value.personalInfo.residentType = '';
	}

	onSubmit(): void {
		console.log(this.applicationForm.value);
	}

}
