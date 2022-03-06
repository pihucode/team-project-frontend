import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address, EmergencyContact, EmergencyContactList, OnboardingRequest, Person, Visa, Document, DocumentList, ReferenceList, Reference } from 'src/app/models/onboarding-models';
import { OnboardingService } from 'src/app/services/onboarding.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { FileService } from 'src/app/services/file-service';

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
			firstName: new FormControl('', [
				Validators.required,
				Validators.minLength(2)
			]),
			lastName: new FormControl('', [
				Validators.required,
				Validators.minLength(4)
			]),
			preferredName: [''],
			ssn: new FormControl('', [
				Validators.required,
				Validators.min(10000000),
				Validators.max(100000000)
			]),
			birthdate: this.fb.group({
				day: [''],
				month: [''],
				year: ['']
			}),
			gender: [''],
			hasDriverLicense: [false],
		}),
		addressInfo: this.fb.group({
			street: ['', Validators.required],
			city: ['', Validators.required],
			state: ['', Validators.required],
			zip: ['', Validators.required]
		}),
		contactInfo: this.fb.group({
			personalEmail: new FormControl('', [
				Validators.required,
				Validators.email
			]),
			workEmail: new FormControl('', [
				Validators.email
			]),
			cellPhone: new FormControl('', [
				Validators.required,
				Validators.min(1000000000),
				Validators.max(10000000000)
			]),
			workPhone: new FormControl('', [
				Validators.min(1000000000),
				Validators.max(10000000000)
			]),
		}),
		visaInfo: this.fb.group({
			// residentType: [''],
			// workAuthorization: [''],
			type: ['', Validators.required],
			workDateStart: ['', Validators.required],
			workDateEnd: ['', Validators.required],
		}),
		carInfo: this.fb.group({
			maker: [''],
			model: [''],
			color: ['']
		}),
		references: this.fb.array([]),
		emergencyContacts: this.fb.array([])
		// documents: this.fb.array([])
	});
	formData: FormData = new FormData();
	selectedFiles?: FileList;

	constructor(private fb: FormBuilder,
		private onboardingService: OnboardingService,
		private activatedRoute: ActivatedRoute,
		private datePipe: DatePipe,
		private fileService: FileService) { }

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(
			(params) => {
				this.email = params['email'];
			}
		)
		console.log(this.applicationForm.valid);
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
	// get documents() {
	// 	return this.applicationForm.controls["documents"] as FormArray;
	// }
	// addDocument() {
	// 	const documentGroup = this.fb.group({
	// 		file: [undefined]
	// 	});
	// 	this.documents.push(documentGroup);
	// }
	// deleteDocument(i: number) {
	// 	this.documents.removeAt(i);
	// }
	// =============== DOCUMENT INPUT ==================
	handleDocDownload(filename: string) {
		this.fileService.downloadDoc(filename);
	}

	selectFile(event: any): void {
		this.selectedFiles = event.target.files;
	}

	getFormData() {
		if (this.selectedFiles) {
			const file: File | null = this.selectedFiles.item(0);
			if (file) {
				this.formData.set('file', file as File);
				return this.formData;
			}
		}
		return null;
	}
	// ===================================================

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
		// let documents: Document[] = [];
		// for (let doc of documentsArray) {
		// 	let newDoc = new Document(doc.file);
		// 	documents.push(newDoc);
		// }
		// let documentList: DocumentList = new DocumentList(documents);

		// onboarding request
		let onboardingRequest = new OnboardingRequest(
			person,
			visa,
			address,
			refList,
			emergencyContactList
		);
		this.onboardingService.onboard(onboardingRequest, this.getFormData(), this.email);
	}

}
