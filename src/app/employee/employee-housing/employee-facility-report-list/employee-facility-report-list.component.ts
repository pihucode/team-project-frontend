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
  }
}
