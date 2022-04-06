import { TestBed } from '@angular/core/testing';

import { GetcorsService } from './getcors.service';

describe('GetcorsService', () => {
  let service: GetcorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
