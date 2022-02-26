import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRVisaManagementComponent } from './hr-visa-management.component';

describe('HRVisaManagementComponent', () => {
  let component: HRVisaManagementComponent;
  let fixture: ComponentFixture<HRVisaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRVisaManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRVisaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
