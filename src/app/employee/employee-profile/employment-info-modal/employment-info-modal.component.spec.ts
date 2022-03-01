import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentInfoModalComponent } from './employment-info-modal.component';

describe('EmploymentInfoModalComponent', () => {
  let component: EmploymentInfoModalComponent;
  let fixture: ComponentFixture<EmploymentInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
