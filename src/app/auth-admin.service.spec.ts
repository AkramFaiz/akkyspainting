import { TestBed, inject } from '@angular/core/testing';

import { AuthAdminGuardService } from './auth-admin.service';

describe('AuthAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdminGuardService]
    });
  });

  it('should be created', inject([AuthAdminGuardService], (service: AuthAdminGuardService) => {
    expect(service).toBeTruthy();
  }));
});
