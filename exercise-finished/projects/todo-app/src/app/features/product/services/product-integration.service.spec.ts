import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductIntegrationService } from './product-integration.service';

describe('ProductIntegrationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('should be created', () => {
    const service: ProductIntegrationService = TestBed.inject(
      ProductIntegrationService
    );
    expect(service).toBeTruthy();
  });
});
