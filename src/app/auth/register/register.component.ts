import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { RegisterService } from 'src/app/services/register.service';

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

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    // TODO: Set Email and Token by obtaining from somewhere 
    this.registrationToken = 'som3t0k3n';
    this.email = 'some@email.com';
    this.displayUsernameTaken = false;
  }

  onSubmit = () => {
    // console.log(this.register);
    this.registerService.registerNewUser(this.register);
    this.register.clear()
    // If not redirected, display error msg of username taken
    this.displayUsernameTaken = true;
  }
}
