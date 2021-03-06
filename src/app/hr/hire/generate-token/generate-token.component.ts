import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailMessage } from 'src/app/models/email-message';
import { Token } from 'src/app/models/token';
import { EmailService } from 'src/app/services/email.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
	selector: 'app-generate-token',
	templateUrl: './generate-token.component.html',
	styleUrls: ['./generate-token.component.css']
})
export class GenerateTokenComponent implements OnInit {
	generateTokenForm = this.fb.group({
		email: new FormControl('', Validators.compose([
			Validators.required,
			Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
		]))
	});

	constructor(private fb: FormBuilder,
		private emailService: EmailService,
		private tokenService: TokenService) { }

	ngOnInit(): void {
	}

	generateToken(): void {
		this.tokenService.generateToken(this.generateTokenForm.value.email).subscribe(response => {
			let token = response.token;
			let email: string = this.generateTokenForm.value.email;
			let url: string = `http://localhost:4200/register?email=${email}&token=${token}`;
			let to: string = this.generateTokenForm.value.email;
			let subject: string = 'Generated Token';
			let text: string = `Here is your generated token: ${url}`;
			let emailMessage = new EmailMessage(to, subject, text);
			this.emailService.sendEmail(emailMessage);
			alert('Token has been generated and sent!');
		}, err => {
			console.log('Error with with token generation.')
			console.log(err);
		});
	}

}
