import { Component, OnInit } from '@angular/core';
import { FacilityReport } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-employee-facility-report-list',
  templateUrl: './employee-facility-report-list.component.html',
  styleUrls: ['./employee-facility-report-list.component.css']
})
export class EmployeeFacilityReportListComponent implements OnInit {
  report = new FacilityReport('','','','','');
  reportList: FacilityReport[] = [];
  email: string = 'some@email.com';

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    // TOGO: get employee email
    // this.email = 
    
    // GET Report List from backend
    this.housingService.getAllReports().subscribe(reportList => {
      console.log('Got report List');
      // this.reportList = reportList;
    }, err => {
      console.log('Error receiving report list.');
      console.log(err);
    });

    this.report.status = 'Open';
    this.reportList.push(new FacilityReport('title1','desc2','some1','2022-09-12','In Progress'));
    this.reportList.push(new FacilityReport('title2','desc2','some2','2022-12-12','Closed'));
  }

  onSubmit = () => {
    // TODO: Only send title and description ???
    // this.report.createdBy = employee name
    let date = new Date();
    this.report.reportDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.housingService.postReportByEmail(this.email, this.report).subscribe(res => {
      console.log('Report successfully submitted');
      this.reportList.push(Object.assign({}, this.report));
      this.report.clear();
      this.report.status = 'Open';
    }, err => {
      console.log('Error submitting report');
      console.log(err);
    });
  }
}
