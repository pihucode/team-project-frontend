import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRNavigationComponent } from './hr-navigation.component';

describe('HRNavigationComponent', () => {
  let component: HRNavigationComponent;
  let fixture: ComponentFixture<HRNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
