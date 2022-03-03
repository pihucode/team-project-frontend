import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class VisaStatusManagementComponent implements OnInit {

  data: SomeData[] = [
    {fullname: 'name1', workauth: 'L2', expdate: '2022-09-23', daysleft: 210, documents: 'someDoc'},
    {fullname: 'name2', workauth: 'other', expdate: '2022-12-20', daysleft: 298, documents: 'someDoc'},
    {fullname: 'name3', workauth: 'H4', expdate: '2022-12-29', daysleft: 307, documents: 'someDoc'}
  ]

  dataSource = this.data;
  columnsToDisplay = ['fullname', 'workauth', 'expdate', 'daysleft'];
  expandedElement: SomeData | null;

  constructor() { }

  ngOnInit(): void {
    // TODO: Fetch data from backend
  }
}

export interface SomeData {
  fullname: string;
  workauth: string;
  expdate: string;
  daysleft: number;
  documents: string;
}

