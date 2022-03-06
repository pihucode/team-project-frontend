import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthConstant } from '../constants/auth-constants';
import { ApplicationsService } from '../services/applications.service';

// Access to the onboarding form
@Injectable({
	providedIn: 'root'
})
export class OnBoardAuthGuardGuard implements CanActivate, CanActivateChild {

	constructor(private router: Router,
		private applicationsService: ApplicationsService) { }

	status: string = AuthConstant.STATUS;

	isOnBoard() {
		// this.applicationsService.getApplicationStatus().pipe(map(status => {
		// 	return sessionStorage.getItem('role') === 'employee' && status === 'rejected';
		// }));
		return sessionStorage.getItem('role') === 'employee'
			&& (this.status === 'rejected' || this.status === 'notexist');
	}
	isEmployeeAndApproved(): boolean {
		// this.applicationsService.getApplicationStatus().subscribe(status => {
		// 	return sessionStorage.getItem('role') === 'employee' && status === 'approved';
		// });
		return sessionStorage.getItem('role') === 'employee' && this.status === 'approved';
	}
	isEmployeeAndPending() {
		// this.applicationsService.getApplicationStatus().subscribe(status => {
		// 	return sessionStorage.getItem('role') === 'employee' && status === 'pending';
		// });
		return sessionStorage.getItem('role') === 'employee' && this.status === 'pending';
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.isOnBoard()) {
			return true;
		} else if (this.isEmployeeAndApproved()) {
			console.log('is employee and approved');
			return this.router.createUrlTree(["/employee/home"]);
		} else if (this.isEmployeeAndPending()) {
			console.log('is employee and pending');
			return this.router.createUrlTree(["/application-status"]);
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
