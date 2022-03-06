import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstant } from '../constants/auth-constants';
import { ApplicationsService } from '../services/applications.service';

// Access to normal employee links: profile, visa, etc
@Injectable({
	providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild {

	constructor(private router: Router,
		private applicationsService: ApplicationsService) { }

	// status: string = AuthConstant.STATUS;

	getStatus(): string {
		return sessionStorage.getItem('status');
	}

	isEmployeeAndApproved() {
		return sessionStorage.getItem('role') === 'employee'
			&& this.getStatus() === 'approved';
	}
	isEmployee() {
		return sessionStorage.getItem('role') === 'employee';
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (this.isEmployeeAndApproved()) {
			console.log('is employee and approved');
			return true;

		} else if (this.isEmployee()) {
			console.log('is employee and pending/rejected');
			return this.router.createUrlTree(["/application-status"]);

		} else { //user is not logged in
			console.log('not logged in');
			return this.router.createUrlTree(["/login"]);
		}
	}

	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return true;
	}

}
