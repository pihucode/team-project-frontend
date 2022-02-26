import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRHomeComponent } from './hr-home.component';

describe('HRHomeComponent', () => {
  let component: HRHomeComponent;
  let fixture: ComponentFixture<HRHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
