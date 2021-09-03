import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: [ './billing-info.component.scss' ]
})
export class BillingInfoComponent implements OnInit {

  public billingInfoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.billingInfoForm = this.fb.group({
      basicInfo: [ '' ],
      address: [ '' ],
      age: [ '' ],
      experience: [ '' ],
    });
  }

  ngOnInit() {
  }

}
