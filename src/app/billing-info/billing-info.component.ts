import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const data = {
  basicInfo: {
    fname: 'Luka',
    email: '1lukagrdinic@gmail.com'
  },
  address: {
    address: 'My address 123'
  }
};

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
      dateOfBirth: [ '' ],
    });
  }

  ngOnInit() {
    this.billingInfoForm.patchValue(data);
  }

}
