import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthConstant } from '../constants/auth-constants';
import { ApplicationsService } from '../services/applications.service';

// Access to the application-status page
@Injectable({
	providedIn: 'root'
})
export class AppStatusGuard implements CanActivate, CanActivateChild {

	constructor(private router: Router,
		private applicationsService: ApplicationsService) { }

	// status: string = AuthConstant.STATUS;

	getStatus(): string {
		return sessionStorage.getItem('status');
	}
	isEmployee(): boolean {
		return sessionStorage.getItem('role') === 'employee';
	}
	isEmployeeAndNotApproved() {
		return sessionStorage.getItem('role') === 'employee' && this.getStatus() !== 'approved';
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.isEmployeeAndNotApproved()) {
			return true;
		} else if (this.isEmployee()) {
			console.log('is employee');
			return this.router.createUrlTree(["/employee/home"]);
		} else {
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
