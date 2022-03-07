import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeVisaInfo } from 'src/app/models/general-models';
import { VisaService } from 'src/app/services/visa.service';
import { DocumentFile } from 'src/app/models/general-models';
import { FileService } from 'src/app/services/file-service';

@Component({
	selector: 'app-visa-management',
	templateUrl: './visa-management.component.html',
	styleUrls: ['./visa-management.component.css']
})
export class VisaManagementComponent implements OnInit {
	documents = [
		{ documentName: 'document1' },
		{ documentName: 'document2' },
		{ documentName: 'document3' }
	];
	visa = new EmployeeVisaInfo('', '', '', undefined, '', '');
	message: string;
	docType: string;
	stage: number;
	formData: FormData = new FormData();
	selectedFiles?: FileList;
	filenames: string[] = [];

	constructor(
		private visaService: VisaService,
		private fileService: FileService) { }

	ngOnInit(): void {
		// get data from backend
		this.visaService.getVisaInfo().subscribe((data: EmployeeVisaInfo) => {
			this.visa = data;
		});
		this.visaService.getOptStage().subscribe((data: number) => {
			this.stage = data;
			this.setupStatus();
		});
		this.populateDocs();
	}

	populateDocs() {
		this.fileService.getOptDocs().subscribe((data: string[]) => {
			this.filenames = data;
			console.log(this.filenames);
		});
	}

	selectFile(event: any): void {
		this.selectedFiles = event.target.files;
	}

	handleDocUpload() {
		if (this.selectedFiles) {
			const file: File | null = this.selectedFiles.item(0);
			if (file) {
				this.formData.set('file', file as File);
				// let doc: DocumentFile = new DocumentFile(
				// 	this.formData, this.docType
				// );
				this.fileService.uploadDoc(this.formData, this.docType).subscribe(res => {
					console.log('uploadDoc called!')
					this.stage++;
					this.selectedFiles = undefined;
					this.setupStatus();
					this.populateDocs();
					alert("File has been uploaded!");
					// location.reload();
				});
			}
		}
		this.selectedFiles = undefined;
		// this.stage++;
		// this.selectedFiles = undefined;
		// this.setupStatus();
		// this.populateDocs(); //doesn't work because backend lags behind
		// todo - maybe force a page reload?

	}

	handleDocDownload(filename: string) {
		this.fileService.downloadDoc(filename);
	}

	setupStatus() {
		switch (this.stage) {
			case 1: {
				this.message = "Please upload a copy of your OPT Receipt";
				this.docType = "OPT_Receipt";
				break;
			}
			case 2: {
				this.message = "Please upload a copy of your OPT EAD";
				this.docType = "OPT_EAD";
				break;
			}
			case 3: {
				this.message = "Please download and fill your I-983 form";
				this.docType = "I-983_form";
				break;
			}
			case 4: {
				this.message = "Waiting for HR to approve and sign I-983";
				this.docType = "";
				break;
			}
			case 5: {
				this.message = "“Please send the I-983 with all necessary documents to your school and upload the new I-20";
				this.docType = "I-20";
				break;
			}
			case 6: {
				this.message = "Please upload your OPT STEM Receipt";
				this.docType = "OPT_STEM_Receipt";
				break;
			}
			case 7: {
				this.message = "Please upload your OPT STEM EAD";
				this.docType = "OPT_STEM_EAD";
				break;
			}
			default: {
				this.message = "All set. No action required.";
				this.docType = "";
				break;
			}
		}
	}

}
