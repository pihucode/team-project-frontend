import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddFacilityReport, FacilityReport } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-employee-facility-report-list',
  templateUrl: './employee-facility-report-list.component.html',
  styleUrls: ['./employee-facility-report-list.component.css']
})
export class EmployeeFacilityReportListComponent implements OnInit {
  reportList: FacilityReport[] = [];
  email: string;

  addReportGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private housingService: HousingService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');

    this.housingService.getAllReportsByEmail().subscribe((data: FacilityReport[]) => {
      this.reportList = data;
    });

    // GET Report List from backend
    // this.housingService.getAllReports().subscribe(reportList => {
    //   console.log('Got report List');
    //   // this.reportList = reportList;
    // }, err => {
    //   console.log('Error receiving report list.');
    //   console.log(err);
    // });

    // this.reportList.push(new FacilityReport('title1', 'desc2', 'some1', '2022-09-12', 'In Progress'));
    // this.reportList.push(new FacilityReport('title2', 'desc2', 'some2', '2022-12-12', 'Closed'));
  }

  onSubmit = () => {
    // this.report.createdBy = employee name

    let data = this.addReportGroup.value;
    let report = new AddFacilityReport(
      data.title,
      data.description
    );
    this.housingService.addReport(report);
    alert("Facility Report has been submitted!");
    location.reload();

    // let date = new Date();
    // this.report.reportDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    // this.housingService.postReportByEmail(this.email, this.report).subscribe(res => {
    //   console.log('Report successfully submitted');
    //   this.reportList.push(Object.assign({}, this.report));
    //   this.report.clear();
    //   this.report.status = 'Open';
    // }, err => {
    //   console.log('Error submitting report');
    //   console.log(err);
    // });
  }
}
