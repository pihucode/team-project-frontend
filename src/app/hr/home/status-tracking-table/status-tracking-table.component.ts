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
	columnsToDisplay: string[] = ['fullname', 'visa-type', 'exp-date', 'days-left', 'next-step', 'action', 'manage'];

	// data = [
	//   {id: 1, name: 'name1', visatype: 'visa1', expdate: '2022-09-23', daysleft: 210, nextstep: 'I-20', action: 'notify'},
	//   {id: 8844, name: 'name2', visatype: 'other', expdate: '2022-12-20', daysleft: 298, nextstep: 'SOME SIGN', action: 'preview download'},
	//   {id: 271, name: 'name3', visatype: 'H4', expdate: '2022-12-29', daysleft: 307, nextstep: 'I--983 NEED TO BE SIGNED', action: 'preview download'},
	// ]
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
		this.fileService.getFileName(email, "I-983_form").subscribe((filename: string) => {
			this.fileService.downloadDoc(filename);
		});
	}

	handleDocPreview(email: string) {
		console.log("handleDocPreview: " + email);
	}

}
