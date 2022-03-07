import { Component, OnInit } from '@angular/core';
import { EmailMessage } from 'src/app/models/email-message';
import { VisaInfo } from 'src/app/models/general-models';
import { EmailService } from 'src/app/services/email.service';
import { FileService } from 'src/app/services/file-service';
import { VisaService } from 'src/app/services/visa.service';

@Component({
	selector: 'app-status-tracking-table',
	templateUrl: './status-tracking-table.component.html',
	styleUrls: ['./status-tracking-table.component.css']
})
export class StatusTrackingTableComponent implements OnInit {
	columnsToDisplay: string[] = ['fullname', 'visa-type', 'exp-date', 'next-step', 'action', 'manage'];

	dataSource: VisaInfo[];

	constructor(private visaService: VisaService,
		private emailService: EmailService,
		private fileService: FileService) { }

	ngOnInit(): void {
		// fetch data from backend
		let lst: VisaInfo[] = [];
		this.visaService.getVisaList().subscribe((res: VisaInfo[]) => {
			// console.log(res);
			for (let item of res) {
				lst.push(item);
			}
			this.dataSource = lst;
		});
	}

	notify(email: string, nextStep: string) {
		let subject: string = 'Visa Status Reminder';
		let text: string = `Reminder to upload your ${nextStep} file.`;
		let emailMessage = new EmailMessage(email, subject, text);
		this.emailService.sendEmail(emailMessage);
		alert('Notification has been sent!');
	}

	handleDocDownload(email: string) {
		this.fileService.getFileNameByEmailAndType(email, "I-983_form").subscribe((filename: string) => {
			this.fileService.downloadDoc(filename);
		});
	}

	handleDocPreview(email: string) {
		console.log("handleDocPreview: " + email);
		this.fileService.getFileNameByEmailAndType(email, "I-983_form").subscribe((filename: string) => {
			window.open(filename, '_blank');

		});
	}

}
