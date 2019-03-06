import { TestBed } from '@angular/core/testing';

import { ViewTabdataService } from './view-tabdata.service';

describe('ViewTabdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewTabdataService = TestBed.get(ViewTabdataService);
    expect(service).toBeTruthy();
  });
});
