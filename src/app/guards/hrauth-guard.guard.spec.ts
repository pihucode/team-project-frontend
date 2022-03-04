import { TestBed } from '@angular/core/testing';

import { HRAuthGuardGuard } from './hrauth-guard.guard';

describe('HRAuthGuardGuard', () => {
  let guard: HRAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HRAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
