import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactInfoModalComponent } from './employee-contact-info-modal.component';

describe('EmployeeContactInfoModalComponent', () => {
  let component: EmployeeContactInfoModalComponent;
  let fixture: ComponentFixture<EmployeeContactInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeContactInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
