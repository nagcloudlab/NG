import { TestBed } from '@angular/core/testing';

import { FormStateCheckService } from './form-state-check.service';

describe('FormStateCheckService', () => {
  let service: FormStateCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStateCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
