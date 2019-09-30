import { TestBed } from '@angular/core/testing';

import { AuthHTTPServiceService } from './auth-db-service.service';

describe('AuthHTTPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHTTPServiceService = TestBed.get(AuthHTTPServiceService);
    expect(service).toBeTruthy();
  });
});
