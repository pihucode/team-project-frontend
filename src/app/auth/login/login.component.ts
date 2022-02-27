import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useEmail: boolean = false;
  login = new Login();
  constructor() { }

  ngOnInit(): void {
  }

  changeLoginField = () => {
    this.useEmail = !this.useEmail;
    this.login = new Login();
  }

  onSubmit = () => {
    console.log(this.login);
    this.login = new Login();
  }
}