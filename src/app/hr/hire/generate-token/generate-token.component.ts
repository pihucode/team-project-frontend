import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailMessage } from 'src/app/models/EmailMessage';
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
		email: ['', Validators.required]
	});

	constructor(private fb: FormBuilder, private http: HttpClient, private emailService: EmailService, 
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
		});
	}

}
