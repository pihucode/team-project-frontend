import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
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

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  changeLoginField = () => {
    this.useEmail = !this.useEmail;
    this.login.clear();
  }

  onSubmit = () => {
    this.loginService.attemptLogin(this.login).subscribe(response => {
      if (response == "hr") {
        this.router.navigate(['hr/home']);
        this.displayBadLogin = false;
      } else if (response == "employee") {
        this.router.navigate(['employee/home']);
        this.displayBadLogin = false;
      } else {
        // No redirection, login failed
        console.log('Login Failed');
        // No redirect, display login error message
        this.displayBadLogin = true;
      }
    });
    this.login.clear();
  }
}
