import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UniqueContact } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { EmployeeEmergencyContactInfoModalContentComponent } from '../../modal-content/employee-emergency-contact-info-modal-content/employee-emergency-contact-info-modal-content.component';

@Component({
  selector: 'app-employee-emergency-contact-info-modal',
  templateUrl: './employee-emergency-contact-info-modal.component.html',
  styleUrls: ['./employee-emergency-contact-info-modal.component.css']
})
export class EmployeeEmergencyContactInfoModalComponent implements OnInit {
  @Input() emergencyContacts: UniqueContact[];

  constructor(private modalService: NgbModal,
    private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {
    this.profileInfoService.getEmergencyContacts().subscribe(data => {
      this.emergencyContacts = data;
    });
  }

  openEmgencyContactInfoModal = (data: UniqueContact): void => {
    const modalRef = this.modalService.open(EmployeeEmergencyContactInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.emergencyContacts = this.emergencyContacts;
    modalRef.componentInstance.emergencyContactInfo = data;
  }
}
