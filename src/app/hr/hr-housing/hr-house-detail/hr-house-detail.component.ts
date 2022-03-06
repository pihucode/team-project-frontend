import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacilityInfo, FacilityReport, HousingInfo, HousingInfoFull, Resident } from 'src/app/models/housing-models';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-hr-house-detail',
  templateUrl: './hr-house-detail.component.html',
  styleUrls: ['./hr-house-detail.component.css']
})
export class HrHouseDetailComponent implements OnInit {
  id: number = undefined;
  house: HousingInfoFull;
  reports: FacilityReport[];
  residents: Resident[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.housingService.getHouseById(this.id).subscribe((res: HousingInfoFull) => {
        this.house = res;
      });
      this.housingService.getAllReportsByHouse(this.id).subscribe((res: FacilityReport[]) => {
        this.reports = res;
      })

      // TODO: GET REPORT COMMENTS (MAKE PART OF FACILITY REPORT CLASS???)
      // TODO: GET EMPLOYEE LIST
    });
  }

}
