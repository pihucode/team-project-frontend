import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-project-frontend';

  constructor(private router: Router) { }

  logout(): void {
    console.log('logout!');
    sessionStorage.clear();
    this.router.navigate([`login`]);
  }
}
