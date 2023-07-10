import { TestBed } from '@angular/core/testing';

import { WinterService } from './winter.service';

describe('WinterService', () => {
  let service: WinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
