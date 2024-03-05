import { TestBed } from '@angular/core/testing';

import { EleguenService } from './eleguen.service';

describe('EleguenService', () => {
  let service: EleguenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleguenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
