import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRPersonalProfileComponent } from './hr-personal-profile.component';

describe('HRPersonalProfileComponent', () => {
  let component: HRPersonalProfileComponent;
  let fixture: ComponentFixture<HRPersonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRPersonalProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRPersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
