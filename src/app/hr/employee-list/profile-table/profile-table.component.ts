import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeProfile } from 'src/app/models/general-models';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
	selector: 'app-profile-table',
	templateUrl: './profile-table.component.html',
	styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {
	displayedColumns: string[] = ['name', 'ssn', 'start-date', 'visa-status', 'position', 'details'];
	element_data: EmployeeProfile[] = [];
	dataSource: MatTableDataSource<EmployeeProfile>;

	constructor(private employeeService: EmployeeService,
		private router: Router) { }

	ngOnInit(): void {
		// TODO: Fetch data from backend
		this.employeeService.getEmployeeList().subscribe((data: EmployeeProfile[]) => {
			for (let item of data) {
				let row: EmployeeProfile = new EmployeeProfile(
					item.name,
					item.ssn,
					item.startDate,
					item.visaStatus,
					item.position
				);
				this.element_data.push(row);
			}
			this.dataSource = new MatTableDataSource(this.element_data);
		});
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	goToEmployeeDetail(id: number) {
		console.log(id);
		this.router.navigate([`hr/employee-detail/${id}`]);
	}
}
