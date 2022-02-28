import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
	selector: 'app-modal-container',
	templateUrl: './modal-container.component.html',
	styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
	@Input() application: string = '';

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {
	}

	openModal() {
		const modalRef = this.modalService.open(ModalContentComponent, {size: 'xl'});
		modalRef.componentInstance.application = this.application;
	}



}
