import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRHouseManagementComponent } from './hr-house-management.component';

describe('HRHouseManagementComponent', () => {
  let component: HRHouseManagementComponent;
  let fixture: ComponentFixture<HRHouseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRHouseManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRHouseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
