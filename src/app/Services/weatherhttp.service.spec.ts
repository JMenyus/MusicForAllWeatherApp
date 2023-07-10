import { TestBed } from '@angular/core/testing';

import { WeatherhttpService } from './weatherhttp.service';

describe('WeatherhttpService', () => {
  let service: WeatherhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
