import { TestBed } from '@angular/core/testing';

import { FhirDataServiceService } from './fhir-data-service.service';

describe('FhirDataServiceService', () => {
  let service: FhirDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FhirDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
