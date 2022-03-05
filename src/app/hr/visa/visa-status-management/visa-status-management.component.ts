import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { VisaInfo } from 'src/app/models/general-models';
import { VisaService } from 'src/app/services/visa.service';
import { FileService } from 'src/app/services/file-service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-visa-status-management',
	templateUrl: './visa-status-management.component.html',
	styleUrls: ['./visa-status-management.component.css'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	]
})
export class VisaStatusManagementComponent implements OnInit {

	// data: VisaInfo[] = [];
	dataSource: VisaInfo[] = [];
	columnsToDisplay = ['fullname', 'workauth', 'expdate', 'daysleft'];
	expandedElement: VisaInfo | null;
	formData: FormData = new FormData();
	selectedFiles?: FileList;
	isEdit: boolean = false;
	workAuthorizationTypes: string[] = ['H1-B', 'L2', 'F1 (CPT/OPT)', 'H4', 'Other'];

	constructor(private visaService: VisaService,
		private fileService: FileService) { }

	ngOnInit(): void {
		// fetch data from backend
		this.visaService.getVisaList().subscribe((res: VisaInfo[]) => {
			// for (let item of res) {
			// 	this.data.push(item);
			// }
			// this.dataSource = this.data;
			this.dataSource = res;
		});
	}

	toggleIsEdit() {
		this.isEdit = !this.isEdit;
	}

	selectFile(event: any): void {
		this.selectedFiles = event.target.files;
	}

	handleDocDownload(filename: string) {
		this.fileService.downloadDoc(filename);
	}

	handleDocUpload(email: string) {
		if (this.selectedFiles) {
			const file: File | null = this.selectedFiles.item(0);
			if (file) {
				this.formData.set('file', file as File);
				this.fileService.uploadDocToEmail(this.formData, 'I-983_signed', email);
			}
		}

		this.selectedFiles = undefined;
	}

	onSubmit = (form: NgForm, id: number) => {
		this.visaService.updateVisaById(id, form.value).subscribe(res => {
			this.dataSource[id - 1].expdate = form.value.dateEnd;
			this.dataSource[id - 1].workauth = form.value.type;
		}, err => {
			console.log('Error editing form');
		});
		this.isEdit = false;
	}

}
