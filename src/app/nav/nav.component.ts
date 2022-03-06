import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {

  constructor(private router: Router) { }
  isTest = true;
  isHr: boolean;
  isEmployeeApproved: boolean;
  isEmployeePending: boolean;
  isOnboarding: boolean; //have not submitted an app
  isNotLoggedIn: boolean;

  ngOnInit(): void {
    let isEmployee = sessionStorage.getItem('role') === 'employee';
    let status = sessionStorage.getItem('status');

    this.isHr = sessionStorage.getItem('role') === 'hr';

    this.isEmployeeApproved = isEmployee && status === 'approved';

    this.isEmployeePending = isEmployee && (status === 'pending' || status === 'rejected');

    this.isOnboarding = isEmployee && status === 'notexist';

    this.isNotLoggedIn = !isEmployee && !this.isHr;
  }

  ngDoCheck(): void {
    let isEmployee = sessionStorage.getItem('role') === 'employee';
    let status = sessionStorage.getItem('status');

    this.isHr = sessionStorage.getItem('role') === 'hr';

    this.isEmployeeApproved = isEmployee && status === 'approved';

    this.isEmployeePending = isEmployee && (status === 'pending' || status === 'rejected');

    this.isOnboarding = isEmployee && status === 'notexist';

    this.isNotLoggedIn = !isEmployee && !this.isHr;
  }

  logout(): void {
    console.log('logout!');
    sessionStorage.clear();
    this.router.navigate([`login`]);
  }

}
