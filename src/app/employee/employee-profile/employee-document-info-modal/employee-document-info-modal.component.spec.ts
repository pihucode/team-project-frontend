import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDocumentInfoModalComponent } from './employee-document-info-modal.component';

describe('EmployeeDocumentInfoModalComponent', () => {
  let component: EmployeeDocumentInfoModalComponent;
  let fixture: ComponentFixture<EmployeeDocumentInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDocumentInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDocumentInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
