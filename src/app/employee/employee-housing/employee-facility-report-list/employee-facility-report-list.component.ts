import { Component, OnInit } from '@angular/core';
import { FacilityReport } from 'src/app/models/housing-models';

@Component({
  selector: 'app-employee-facility-report-list',
  templateUrl: './employee-facility-report-list.component.html',
  styleUrls: ['./employee-facility-report-list.component.css']
})
export class EmployeeFacilityReportListComponent implements OnInit {
  report = new FacilityReport('','','','','');
  reportList: FacilityReport[] = [];

  constructor() { }

  ngOnInit(): void {
    // TODO: get Report List from backend
    this.report.status = 'Open';
    this.reportList.push(new FacilityReport('title1','desc2','some1','2022-09-12','In Progress'));
    this.reportList.push(new FacilityReport('title2','desc2','some2','2022-12-12','Closed'));
  }

  onSubmit = () => {
    // this.report.createdBy = employee name
    // this.report.reportDate = current time
    // POST request
    // this.service.report(this.report).subscribe(res => {
    //   console.log('Report successfully submitted');
    //   this.reportList.push(this.report);
    //   this.report.clear();
    //   this.report.status = 'Open';
    // }, err => {
    //   console.log('Error submitting report');
    //   console.log(err);
    // });
    console.log(this.report);
  }
}
