import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { RegisterService } from 'src/app/services/register.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new Account('', '', '');
  registrationToken: string = '';
  email: string = '';
  displayUsernameTaken: boolean = false;
  isTokenValid: boolean = false;

  constructor(private registerService: RegisterService,
    private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.displayUsernameTaken = false;
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.email = params['email'];
        this.registrationToken = params['token'];
        this.register.email = this.email;
      }
    );
    this.getTokenValidity();
  }

  onSubmit = () => {
    this.registerService.registerNewUser(this.register, this.email).subscribe(response => {
      if (response === 'true') {
        console.log('Account Registered');
        // set session data
        sessionStorage.setItem('login', 'true');
        sessionStorage.setItem('role', 'employee');
        sessionStorage.setItem('email', this.email);
        sessionStorage.setItem('status', 'notexist');

        // redirect to onboarding page
        this.router.navigate(
          ['/onboarding'],
          { queryParams: { email: this.email } }
        );
        this.displayUsernameTaken = false;
      } else {
        // If not redirected, display error msg of username taken
        this.displayUsernameTaken = true;
      }
    });
    this.register.clear()
  }

  getTokenValidity() {
    const url = `http://localhost:8080/api/is-token-valid/${this.email}/${this.registrationToken}`;
    this.http.get(url).subscribe((res: boolean) => {
      this.isTokenValid = res;
    })
  }
}
