import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface EmployeeProfile {
  name: string;
  ssn: number;
  startDate: string;
  visaStatus: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})
export class ProfileTableComponent {
  displayedColumns: string[] = ['name', 'ssn', 'start-date', 'visa-status', 'position', 'details'];
  element_data: EmployeeProfile[] = [
    {name: 'Davis Lee', ssn: 55123, startDate: '2020-12-12', visaStatus: 'F1(OPT/CPT)', position: 1},
    {name: 'ADMIN admin', ssn: 886131331, startDate: '2021-07-03', visaStatus: 'L2', position: 2},
    {name: 'Richard', ssn: 111111, startDate: '2020-03-20', visaStatus: 'H4', position: 3},
    {name: 'Mason Lu', ssn: 11111111, startDate: '2021-06-20', visaStatus: 'Other', position: 4},
    {name: 'Hazel Xu', ssn: 123123123, startDate: '2021-01-23', visaStatus: 'F1(OPT)', position: 5},
    {name: 'Josh Lee', ssn: 2191923, startDate: '2020-12-21', visaStatus: 'F1(OPT)', position: 6}
  ]
  dataSource = new MatTableDataSource(this.element_data);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
