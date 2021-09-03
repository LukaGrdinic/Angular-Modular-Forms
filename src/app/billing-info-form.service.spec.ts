import { TestBed } from '@angular/core/testing';

import { BillingInfoFormService } from './billing-info-form.service';

describe('BillingInfoFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingInfoFormService = TestBed.get(BillingInfoFormService);
    expect(service).toBeTruthy();
  });
});
