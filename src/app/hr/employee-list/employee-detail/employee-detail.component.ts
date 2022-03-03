import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeProfile } from 'src/app/models/general-models';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
	selector: 'app-employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
	employeeId: number;
	employeeProfile: EmployeeProfile;

	constructor(
		private employeeService: EmployeeService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {

		this.route.params.subscribe(params => {
			this.employeeId = params['id'];
			// fetch data from backend
			this.employeeService.getEmployeeDetailById(this.employeeId)
				.subscribe((data: EmployeeProfile) => {
					this.employeeProfile = data;
				});
		});
	}

}
