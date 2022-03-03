import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { EmployeeContactInfoModalContentComponent } from '../../modal-content/employee-contact-info-modal-content/employee-contact-info-modal-content.component';

@Component({
  selector: 'app-employee-contact-info-modal',
  templateUrl: './employee-contact-info-modal.component.html',
  styleUrls: ['./employee-contact-info-modal.component.css']
})
export class EmployeeContactInfoModalComponent implements OnInit {
  @Input()
  contactInfo

  constructor(private modalService: NgbModal, private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {

    this.profileInfoService.getContactInfo().subscribe(contactInfo => {
      this.contactInfo = contactInfo;
    });
  }

  openContactInfoModal = (): void => {
    const modalRef = this.modalService.open(EmployeeContactInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.contactInfo = this.contactInfo;
  }

}
