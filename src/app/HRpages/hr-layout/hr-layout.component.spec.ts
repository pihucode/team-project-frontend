import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRLayoutComponent } from './hr-layout.component';

describe('HRLayoutComponent', () => {
  let component: HRLayoutComponent;
  let fixture: ComponentFixture<HRLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
