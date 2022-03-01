import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEmergencyContactInfoModalComponent } from './employee-emergency-contact-info-modal.component';

describe('EmployeeEmergencyContactInfoModalComponent', () => {
  let component: EmployeeEmergencyContactInfoModalComponent;
  let fixture: ComponentFixture<EmployeeEmergencyContactInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEmergencyContactInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEmergencyContactInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
