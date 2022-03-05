import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UniqueContact } from 'src/app/models/profile-models';
import { ProfileInfoService } from 'src/app/services/profile-info.service';
import { EmployeeRefInfoModalContentComponent } from '../../modal-content/employee-ref-info-modal-content/employee-ref-info-modal-content.component';

@Component({
  selector: 'app-employee-ref-info-modal',
  templateUrl: './employee-ref-info-modal.component.html',
  styleUrls: ['./employee-ref-info-modal.component.css']
})
export class EmployeeRefInfoModalComponent implements OnInit {
  @Input() refs: UniqueContact[];

  constructor(private modalService: NgbModal,
    private profileInfoService: ProfileInfoService) { }

  ngOnInit(): void {
    this.profileInfoService.getReferences().subscribe(data => {
      this.refs = data;
    });
  }

  openRefInfoModal = (data: UniqueContact): void => {
    const modalRef = this.modalService.open(EmployeeRefInfoModalContentComponent, { centered: true });
    modalRef.componentInstance.refs = this.refs;
    modalRef.componentInstance.refInfo = data;
  }
}
