import { TestBed } from '@angular/core/testing';

import { EpanierServiceService } from './epanier-service.service';

describe('EpanierServiceService', () => {
  let service: EpanierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpanierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
