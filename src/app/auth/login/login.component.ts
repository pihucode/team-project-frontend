import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { ApplicationsService } from 'src/app/services/applications.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	useEmail: boolean = false;
	login = new Account('', '', '');
	displayBadLogin: boolean = false;

	constructor(private loginService: LoginService,
		private router: Router,
		private applicationsService: ApplicationsService) { }

	ngOnInit(): void {
	}

	changeLoginField = () => {
		this.useEmail = !this.useEmail;
		this.login.clear();
	}

	onSubmit = () => {
		this.loginService.attemptLogin(this.login).subscribe(response => {
			if (response == "hr") {
				// set session data
				sessionStorage.setItem('login', 'true');
				sessionStorage.setItem('role', 'hr');
				sessionStorage.setItem('email', this.login.email);

				// redirect
				this.displayBadLogin = false;
				this.router.navigate(['hr/home']);

			} else if (response == "employee") {
				// set session data
				sessionStorage.setItem('login', 'true');
				sessionStorage.setItem('role', 'employee');
				sessionStorage.setItem('email', this.login.email);

				// redirect to onboarding if application does not exist
				// todo

				// redirect to either home or status page
				this.applicationsService.getApplicationStatus().subscribe((status: string) => {
					let route = 'application-status';
					if (status === 'approved') {
						route = 'employee/home';
					} else if (status === 'notexist') {
						route = 'onboarding';
					}
					this.displayBadLogin = false;
					this.router.navigate([route]);
				});
			} else {
				// No redirect, display login error message
				this.displayBadLogin = true;
			}
		});
		this.login.clear();
	}
}
