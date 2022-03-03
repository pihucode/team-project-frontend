import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-tracking-table',
  templateUrl: './status-tracking-table.component.html',
  styleUrls: ['./status-tracking-table.component.css']
})
export class StatusTrackingTableComponent implements OnInit {
  columnsToDisplay: string[] = ['id', 'name', 'visa-type', 'exp-date', 'days-left', 'next-step', 'action'];

  data = [
    {id: 1, name: 'name1', visatype: 'visa1', expdate: '2022-09-23', daysleft: 210, nextstep: 'I-20', action: 'notify'},
    {id: 8844, name: 'name2', visatype: 'other', expdate: '2022-12-20', daysleft: 298, nextstep: 'SOME SIGN', action: 'preview download'},
    {id: 271, name: 'name3', visatype: 'H4', expdate: '2022-12-29', daysleft: 307, nextstep: 'I--983 NEED TO BE SIGNED', action: 'preview download'},
  ]
  constructor() { }

  ngOnInit(): void {
    // TODO: Fetch data from backend
  }

}
