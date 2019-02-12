import { TestBed, inject } from '@angular/core/testing';

import { DashboardProjectsResolverService } from './dashboard-projects-resolver.service';

describe('DashboardProjectsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardProjectsResolverService]
    });
  });

  it('should be created', inject([DashboardProjectsResolverService], (service: DashboardProjectsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
