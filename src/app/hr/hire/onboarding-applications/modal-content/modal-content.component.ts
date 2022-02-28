import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// TODO: Import Angular Material 
// import {MatTabsModule} from '@angular/material/tabs';


@Component({
	selector: 'app-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
	@Input() application: string = '';

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit(): void {
	}

}
