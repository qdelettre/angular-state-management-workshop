import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserIntegrationService } from './user-integration.service';

describe('UserIntegrationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('should be created', () => {
    const service: UserIntegrationService = TestBed.inject(
      UserIntegrationService
    );
    expect(service).toBeTruthy();
  });
});
