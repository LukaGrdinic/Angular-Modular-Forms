import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserInfoFormService } from '../user-info-form.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: [ './user-info.component.scss' ],
  providers: [UserInfoFormService]
})
export class UserInfoComponent implements OnInit {

  public userInfoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userInfoFormService: UserInfoFormService
    ) {
    this.userInfoForm = this.fb.group({
      basicInfo: [ '' ],
      addressForm: [ '' ],
      ageForm: [ '' ],
      experienceForm: [ '' ],
      jobDetails: [ '' ],
    });
  }

  ngOnInit() {
    this.userInfoForm.valueChanges.subscribe(val => {
      this.userInfoFormService.billingInfoFormState.next(val);
    });
  }

}
