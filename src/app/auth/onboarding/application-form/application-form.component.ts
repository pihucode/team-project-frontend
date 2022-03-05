import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address, EmergencyContact, EmergencyContactList, OnboardingRequest, Person, Visa, Document, DocumentList, ReferenceList, Reference } from 'src/app/models/onboarding-models';
import { OnboardingService } from 'src/app/services/onboarding.service';
import { DatePipe } from '@angular/common';

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
		references: this.fb.array([]),
		emergencyContacts: this.fb.array([]),
		documents: this.fb.array([])
	});

	constructor(private fb: FormBuilder,
		private onboardingService: OnboardingService,
		private activatedRoute: ActivatedRoute,
		private datePipe: DatePipe) { }

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(
			(params) => {
				this.email = params['email'];
			}
		)
	}

	// =============== REFERENCE FORM ARRAY ==================
	get references() {
		return this.applicationForm.controls["references"] as FormArray;
	}
	addReference() {
		const refGroup = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', Validators.required],
			relationship: ['', Validators.required]
		});
		this.references.push(refGroup);
	}
	deleteReference(i: number) {
		this.references.removeAt(i);
	}

	// =============== EMERGENCY CONTACT FORM ARRAY ==================
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

	// =============== DOCUMENT FORM ARRAY ==================
	get documents() {
		return this.applicationForm.controls["documents"] as FormArray;
	}
	addDocument() {
		const documentGroup = this.fb.group({
			file: [undefined]
		});
		this.documents.push(documentGroup);
	}
	deleteDocument(i: number) {
		this.documents.removeAt(i);
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
		let refArray = this.applicationForm.value.references;
		let emergencyContactsArray = this.applicationForm.value.emergencyContacts;
		let documentsArray = this.applicationForm.value.documents;

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
			visaInfo.workDateStart = this.datePipe.transform(visaInfo.workDateStart, "MM/dd/yyyy"),
			visaInfo.workDateEnd = this.datePipe.transform(visaInfo.workDateEnd, "MM/dd/yyyy")
		);
		let address: Address = new Address(
			addressInfo.street,
			addressInfo.city,
			addressInfo.state,
			addressInfo.zip
		);
		// refs
		let refs: Reference[] = [];
		for (let contact of refArray) {
			let newContact = new Reference(
				contact.firstName,
				contact.lastName,
				contact.email,
				contact.phone,
				contact.relationship
			);
			refs.push(newContact);
		}
		let refList: ReferenceList = new ReferenceList(refs);

		// emergency contacts
		let contacts: EmergencyContact[] = [];
		for (let contact of emergencyContactsArray) {
			let newContact = new EmergencyContact(
				contact.firstName,
				contact.lastName,
				contact.email,
				contact.phone,
				contact.relationship
			);
			contacts.push(newContact);
		}
		let emergencyContactList: EmergencyContactList = new EmergencyContactList(contacts);

		// documents
		let documents: Document[] = [];
		for (let doc of documentsArray) {
			let newDoc = new Document(doc.file);
			documents.push(newDoc);
		}
		let documentList: DocumentList = new DocumentList(documents);

		// onboarding request
		let onboardingRequest = new OnboardingRequest(
			person,
			visa,
			address,
			refList,
			emergencyContactList,
			// documentList
		);
		this.onboardingService.onboard(onboardingRequest);
	}

}
