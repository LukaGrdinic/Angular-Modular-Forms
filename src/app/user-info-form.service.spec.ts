import { TestBed } from '@angular/core/testing';

import { UserInfoFormService } from './user-info-form.service';

describe('UserInfoFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInfoFormService = TestBed.get(UserInfoFormService);
    expect(service).toBeTruthy();
  });
});
