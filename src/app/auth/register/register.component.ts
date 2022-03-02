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
      }
    );
    this.getTokenValidity();
  }

  onSubmit = () => {
    this.registerService.registerNewUser(this.register, this.email).subscribe(response => {
      if (response === 'true') {
        console.log('Account Registered');
        // redirect to onboarding page
        this.router.navigate(
          ['/onboarding'],
          { queryParams: { email: this.email } }
        );
        this.displayUsernameTaken = false;
      } else {
        console.log('Username already taken');
        // If not redirected, display error msg of username taken
        this.displayUsernameTaken = true;
      }
    });
    this.register.clear()
  }

  getTokenValidity() {
    const url = `http://localhost:8080/api/is-token-valid?email=${this.email}`;
    this.http.get(url).subscribe((res: boolean) => {
      this.isTokenValid = res;
    })
  }
}
