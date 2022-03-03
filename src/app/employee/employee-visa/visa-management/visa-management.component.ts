import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visa-management',
  templateUrl: './visa-management.component.html',
  styleUrls: ['./visa-management.component.css']
})
export class VisaManagementComponent implements OnInit {
  documents = [
    {documentName: 'document1'},
    {documentName: 'document2'},
    {documentName: 'document3'}
  ];

  constructor() { }

  ngOnInit(): void {
    // TODO: get data from backend
  }

}
