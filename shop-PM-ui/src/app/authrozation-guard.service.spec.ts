import { TestBed } from '@angular/core/testing';

import { AuthrozationGuardService } from './authrozation-guard.service';

describe('AuthrozationGuardService', () => {
  let service: AuthrozationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthrozationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
