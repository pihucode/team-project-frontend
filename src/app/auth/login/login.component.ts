import { Component, OnInit } from '@angular/core';
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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  changeLoginField = () => {
    this.useEmail = !this.useEmail;
    this.login.clear();
  }

  onSubmit = () => {
    // console.log(this.login);
    this.loginService.attemptLogin(this.login);
    this.login.clear();
    // No redirect, display login error message
    this.displayBadLogin = true;
  }
}
