import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-employee-document-info-modal',
  templateUrl: './employee-document-info-modal.component.html',
  styleUrls: ['./employee-document-info-modal.component.css']
})
export class EmployeeDocumentInfoModalComponent implements OnInit {
  DocumentInfo = {}

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openDocumentInfoModal = (): void => {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.personalInfo = this.DocumentInfo;
  }
}
