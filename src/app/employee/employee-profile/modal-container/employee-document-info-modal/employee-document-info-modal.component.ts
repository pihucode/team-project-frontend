import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from 'src/app/services/file-service';
import { EmployeeDocumentInfoModalContentComponent } from '../../modal-content/employee-document-info-modal-content/employee-document-info-modal-content.component';

@Component({
	selector: 'app-employee-document-info-modal',
	templateUrl: './employee-document-info-modal.component.html',
	styleUrls: ['./employee-document-info-modal.component.css']
})
export class EmployeeDocumentInfoModalComponent implements OnInit {
	// @Input()
	// documentInfo

	filenames: string[];

	constructor(private modalService: NgbModal,
		private fileService: FileService) { }

	ngOnInit(): void {
		this.fileService.getMandatoryDocs().subscribe((data: string[]) => {
			this.filenames = data;
		});
	}

	handleDocDownload(filename: string) {
		this.fileService.downloadDoc(filename);
	}

	// openDocumentInfoModal = (): void => {
	//   const modalRef = this.modalService.open(EmployeeDocumentInfoModalContentComponent, { centered: true });
	//   modalRef.componentInstance.documentInfo = this.documentInfo;
	// } 

}
