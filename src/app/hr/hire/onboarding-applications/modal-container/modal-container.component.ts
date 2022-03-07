import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationInfo } from 'src/app/models/application-info';
import { ApplicationsService } from 'src/app/services/applications.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
	selector: 'app-modal-container',
	templateUrl: './modal-container.component.html',
	styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
	@Input()
	applicationId: number;

	@Input()
	email: string;

	constructor(private modalService: NgbModal, private applicationsService: ApplicationsService) { }

	ngOnInit(): void {
	}

	openModal() {
		const modalRef = this.modalService.open(ModalContentComponent, { size: 'xl' });
		modalRef.componentInstance.email = this.email;
		modalRef.componentInstance.applicationId = this.applicationId;


		// this.applicationsService.getApplicationById(this.applicationId).subscribe((result: ApplicationInfo) => {
		// 	modalRef.componentInstance.applicationInfo = result;
		// 	modalRef.componentInstance.email = this.email;
		// 	modalRef.componentInstance.applicationId = this.applicationId;
		// });
	}



}
