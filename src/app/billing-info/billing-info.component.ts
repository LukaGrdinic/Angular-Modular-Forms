import { BillingInfoFormService } from './../billing-info-form.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: [ './billing-info.component.scss' ],
  providers: [BillingInfoFormService]
})
export class BillingInfoComponent implements OnInit {

  public billingInfoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private billingInfoFormService: BillingInfoFormService
    ) {
    this.billingInfoForm = this.fb.group({
      basicInfo: [ '' ],
      addressForm: [ '' ],
      ageForm: [ '' ],
      experienceForm: [ '' ],
      jobDetails: [ '' ],
    });
  }

  ngOnInit() {
    this.billingInfoForm.valueChanges.subscribe(val => {
      this.billingInfoFormService.billingInfoFormState.next(val);
    });
  }

}
