import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeVisaInfo } from 'src/app/models/general-models';
import { VisaService } from 'src/app/services/visa.service';
import { Document } from 'src/app/models/general-models';

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
	visa: EmployeeVisaInfo;
	message: string;
	docType: string;
	stage: number;
	fileForm = this.fb.group({
		file: [undefined],
	});

	constructor(private visaService: VisaService,
		private fb: FormBuilder) { }

	ngOnInit(): void {
		// get data from backend
		this.visaService.getVisaInfo().subscribe((data: EmployeeVisaInfo) => {
			this.visa = data;
		});
		this.visaService.getOptStage().subscribe((data: number) => {
			this.stage = data;
			this.setupStatus(data);
		});
	}

	uploadDoc() {
		let doc: Document = new Document(
			this.fileForm.value.file, this.docType
		);
		this.visaService.uploadDoc(doc);

	}

	setupStatus(stage: number) {
		switch (stage) {
			case 1: {
				this.message = "Please upload a copy of your OPT Receipt";
				this.docType = "OPT Receipt";
				break;
			}
			case 2: {
				this.message = "Please upload a copy of your OPT EAD";
				this.docType = "OPT EAD";
				break;
			}
			case 3: {
				this.message = "Please download and fill your I-983 form";
				this.docType = "I-983 form";
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
				this.docType = "OPT STEM Receipt";
				break;
			}
			case 7: {
				this.message = "Please upload your OPT STEM EAD";
				this.docType = "OPT STEM EAD";
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
