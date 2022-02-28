import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private registerService: RegisterService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayUsernameTaken = false;
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.email = params['email'];
        this.registrationToken = params['token'];
      }
    )
  }

  onSubmit = () => {
    // console.log(this.register);
    this.registerService.registerNewUser(this.register, this.email);
    this.register.clear()
    // If not redirected, display error msg of username taken
    this.displayUsernameTaken = true;
  }
}
