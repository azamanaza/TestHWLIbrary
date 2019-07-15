import { TestBed } from '@angular/core/testing';

import { NgxTestHWService } from './ngx-test-hw.service';

describe('NgxTestHWService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTestHWService = TestBed.get(NgxTestHWService);
    expect(service).toBeTruthy();
  });
});
