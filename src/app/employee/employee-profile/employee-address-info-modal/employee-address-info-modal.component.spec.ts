import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddressInfoModalComponent } from './employee-address-info-modal.component';

describe('EmployeeAddressInfoModalComponent', () => {
  let component: EmployeeAddressInfoModalComponent;
  let fixture: ComponentFixture<EmployeeAddressInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddressInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAddressInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
