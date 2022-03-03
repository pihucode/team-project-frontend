import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address, EmergencyContact, EmergencyContactList, OnboardingRequest, Person, Visa } from 'src/app/models/onboarding-models';
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
		// emergencyContactsArray: this.fb.array([
		// 	this.fb.group({
		// 		firstName: ['', Validators.required],
		// 		lastName: ['', Validators.required],
		// 		phone: ['', Validators.required],
		// 		email: ['', Validators.required],
		// 		relationship: ['', Validators.required]
		// 	}),
		// 	this.fb.group({
		// 		firstName: ['', Validators.required],
		// 		lastName: ['', Validators.required],
		// 		phone: ['', Validators.required],
		// 		email: ['', Validators.required],
		// 		relationship: ['', Validators.required]
		// 	})
		// ]),
		emergencyContacts: this.fb.array([]),
		lessons: this.fb.array([])
	});

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

	// get emergencyContactsArray(): FormArray {
	// 	return this.applicationForm.get('emergencyContactsArray') as FormArray;
	// }

	// addEmergencyContact(): void {
	// 	this.applicationForm.value.emergencyContactsArray.push(
	// 		this.fb.group({
	// 			firstName: ['', Validators.required],
	// 			lastName: ['', Validators.required],
	// 			phone: ['', Validators.required],
	// 			email: ['', Validators.required],
	// 			relationship: ['', Validators.required]
	// 		})
	// 	);
	// }

	// =============== EMERGENCY CONTACT FORM ARRAY =======================
	get emergencyContacts() {
		return this.applicationForm.controls["emergencyContacts"] as FormArray;
	}
	addEmergencyContact() {
		const emergencyContactGroup = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', Validators.required],
			relationship: ['', Validators.required]
		});
		this.emergencyContacts.push(emergencyContactGroup);
	}
	deleteEmergencyContact(i: number) {
		this.emergencyContacts.removeAt(i);
	}
	// =====================================================

	// TEST FORM ARRAY =====================================
	get lessons() {
		return this.applicationForm.controls["lessons"] as FormArray;
	}
	addLesson() {
		const lessonForm = this.fb.group({
			title: [''],
			level: ['']
		});

		this.lessons.push(lessonForm);
	}
	deleteLesson(lessonIndex: number) {
		this.lessons.removeAt(lessonIndex);
	}
	// =====================================================

	onPermanentResidentChange(): void {
		this.isPermanentResident = !this.isPermanentResident;
		// if (this.isPermanentResident) this.applicationForm.value.visaInfo.workAuthorization = '';
		// else this.applicationForm.value.visaInfo.residentType = '';
	}

	onSubmit(): void {
		let personalInfoData = this.applicationForm.value.personalInfo;
		let addressInfo = this.applicationForm.value.addressInfo;
		let contactInfo = this.applicationForm.value.contactInfo;
		let visaInfo = this.applicationForm.value.visaInfo;
		let emergencyContactsArray = this.applicationForm.value.emergencyContactsArray;

		let person: Person = new Person(
			personalInfoData.firstName,
			personalInfoData.lastName,
			personalInfoData.preferredName,
			this.email,
			contactInfo.personalEmail,
			contactInfo.workEmail,
			contactInfo.cellPhone,
			personalInfoData.gender,
			personalInfoData.ssn
		);
		let visa: Visa = new Visa(
			visaInfo.type, //todo
			visaInfo.workDateStart,
			visaInfo.workDateEnd
		);
		let address: Address = new Address(
			addressInfo.street,
			addressInfo.city,
			addressInfo.state,
			addressInfo.zip
		);
		// todo
		let contacts: EmergencyContact[] = [];
		for (let contact of emergencyContactsArray) {
			let newContact = new EmergencyContact(
				contact.firstName,
				contact.lastName,
				contact.email,
				contact.phone,
				contact.relationship
			)
			contacts.push(newContact);
		}
		let emergencyContactList: EmergencyContactList = new EmergencyContactList(
			contacts
		);
		let onboardingRequest = new OnboardingRequest(
			person,
			visa,
			address,
			emergencyContactList
		);
		this.onboardingService.onboard(onboardingRequest);
	}

}
