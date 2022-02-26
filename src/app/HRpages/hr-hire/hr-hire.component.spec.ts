import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRHireComponent } from './hr-hire.component';

describe('HRHireComponent', () => {
  let component: HRHireComponent;
  let fixture: ComponentFixture<HRHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRHireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
