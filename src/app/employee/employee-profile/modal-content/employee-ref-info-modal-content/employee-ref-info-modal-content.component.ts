import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UniqueContact, UniqueContactList } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-ref-info-modal-content',
  templateUrl: './employee-ref-info-modal-content.component.html',
  styleUrls: ['./employee-ref-info-modal-content.component.css']
})
export class EmployeeRefInfoModalContentComponent implements OnInit {
  @Input() refs: UniqueContact[];
  @Input() refInfo: UniqueContact;

  constructor(public activeModal: NgbActiveModal,
    private profileService: ProfileService,
    private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {
  }

  onSubmit = (form: NgForm) => {
    let formData = form.value.refInfo;
    console.log(formData);
    let formRefInfo = new UniqueContact(
      this.refInfo.id,
      formData.firstname,
      formData.lastname,
      formData.email,
      formData.phone,
      formData.relationship);
    this.refs.forEach((item, index) => {
      if (item.id == this.refInfo.id) {
        this.refs[index] = formRefInfo;
      }
    });
    let newData: UniqueContactList = new UniqueContactList(this.refs);
    this.profileService.updateEmergencyContacts(newData);
    this.profileInfoService.setEmergencyContacts(this.refs);
    this.activeModal.close(this.refs);
  }

  displayCancel = () => {
    if (confirm("Discard changes?")) {
      this.activeModal.dismiss();
    }
  }
}
