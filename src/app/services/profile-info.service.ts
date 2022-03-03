import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddressInfo, ContactInfo, EmploymentInfo, PersonalInfo } from '../models/profile-models';

@Injectable({
	providedIn: 'root'
})
export class ProfileInfoService {
	private personalInfo: BehaviorSubject<PersonalInfo> = new BehaviorSubject(new PersonalInfo('', '', '', undefined, undefined));
	private addressInfo: BehaviorSubject<AddressInfo> = new BehaviorSubject(new AddressInfo('', '', '', undefined));
	private contactInfo: BehaviorSubject<ContactInfo> = new BehaviorSubject(new ContactInfo('', '', 0, 0));
	private employmentInfo: BehaviorSubject<EmploymentInfo> = new BehaviorSubject(new EmploymentInfo('', '', ''));
	// TODO: emergencyContactInfo
	// TODO: documentInfo

	constructor() { }

	getPersonalInfo = (): Observable<PersonalInfo> => {
		return this.personalInfo.asObservable();
	}
	getAddressInfo = (): Observable<AddressInfo> => {
		return this.addressInfo.asObservable();
	}
	getContactInfo = (): Observable<ContactInfo> => {
		return this.contactInfo.asObservable();
	}
	getEmploymentInfo = (): Observable<EmploymentInfo> => {
		return this.employmentInfo.asObservable();
	}

	setPersonalInfo = (val: PersonalInfo) => {
		this.personalInfo.next(val);
	}
	setAddressInfo = (val: AddressInfo) => {
		this.addressInfo.next(val);
	}
	setContactInfo = (val: ContactInfo) => {
		this.contactInfo.next(val);
	}
	setEmploymentInfo = (val: EmploymentInfo) => {
		this.employmentInfo.next(val);
	}
}
