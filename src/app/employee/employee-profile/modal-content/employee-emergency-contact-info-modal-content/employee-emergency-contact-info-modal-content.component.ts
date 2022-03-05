import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UniqueContact, UniqueContactList } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
	selector: 'app-employee-emergency-contact-info-modal-content',
	templateUrl: './employee-emergency-contact-info-modal-content.component.html',
	styleUrls: ['./employee-emergency-contact-info-modal-content.component.css']
})
export class EmployeeEmergencyContactInfoModalContentComponent implements OnInit {
	@Input() emergencyContacts: UniqueContact[];
	@Input() emergencyContactInfo: UniqueContact;

	constructor(public activeModal: NgbActiveModal,
		private profileService: ProfileService,
		private profileInfoService: ProfileInfoService) { }

	ngOnInit(): void {
	}

	onSubmit = (form: NgForm) => {
		let formData = form.value.emergencyContactInfo;
		console.log(formData);
		let formRefInfo = new UniqueContact(
			this.emergencyContactInfo.id,
			formData.firstname,
			formData.lastname,
			formData.email,
			formData.phone,
			formData.relationship);
		this.emergencyContacts.forEach((item, index) => {
			if (item.id == this.emergencyContactInfo.id) {
				this.emergencyContacts[index] = formRefInfo;
			}
		});
		let newData: UniqueContactList = new UniqueContactList(this.emergencyContacts);
		this.profileService.updateEmergencyContacts(newData);
		this.profileInfoService.setEmergencyContacts(this.emergencyContacts);
		this.activeModal.close(this.emergencyContacts);
	}

	displayCancel = () => {
		if (confirm("Discard changes?")) {
			this.activeModal.dismiss();
		}
	}

}
