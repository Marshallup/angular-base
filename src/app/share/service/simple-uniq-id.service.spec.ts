import { TestBed } from '@angular/core/testing';

import { SimpleUniqIdService } from './simple-uniq-id.service';

describe('SimpleUniqIdService', () => {
  let service: SimpleUniqIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleUniqIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
