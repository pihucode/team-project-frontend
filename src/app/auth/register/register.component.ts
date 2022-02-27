import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register'
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new Register('', '', '', '');
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    // TODO: Set Email and Token by obtaining from somewhere 
    this.register.registrationToken = 'som3t0k3n';
    this.register.email = 'some@email.com';
  }

  onSubmit = () => {
    console.log(this.register);
    this.registerService.registerNewUser(this.register);
  }
}
