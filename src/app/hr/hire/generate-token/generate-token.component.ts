import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
	selector: 'app-generate-token',
	templateUrl: './generate-token.component.html',
	styleUrls: ['./generate-token.component.css']
})
export class GenerateTokenComponent implements OnInit {
	generateTokenForm = this.fb.group({
		email: ['', Validators.required]
	});

	constructor(private fb: FormBuilder, private http: HttpClient, private emailService: EmailService) { }

	ngOnInit(): void {
	}

	generateToken(): void {
		let email: string = this.generateTokenForm.value.email;
		//TODO - POST to endpoint to get token response: localhost:8080/api/generate-token
		let token: string = "";
		let url: string = `http://localhost:4200/register?email=${email}&token=${token}`;

		let to: string = this.generateTokenForm.value;
		let subject: string = 'Generated Token';
		let text: string = `Here is your generated token: ${url}`;
		this.emailService.sendEmail(to, subject, text);
	}

}
