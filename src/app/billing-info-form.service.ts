import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BillingInfoFormValues {
  basicInfo: {
    fname: string,
    email: string,
    dateOfBirthForm: {
      date: string
    },
  },
  addressForm: {
    address: string
  },
  ageForm: {
    age: number
  },
  experienceForm: {
    experience: number,
  },
  jobDetails: {
    jobStartDateForm: {
      startDate: string
    }
  },
}

export const defualtBillingInfoFormState: BillingInfoFormValues = {
  basicInfo: {
    fname: 'Marko',
    email: 'markomarkovic@gmail.com',
    dateOfBirthForm: {
      date: '2021-09-09'
    },
  },
  addressForm: {
    address: 'Address 123 New York, USA',
  },
  ageForm: {
    age: 25
  },
  experienceForm: {
    experience: 20,
  },
  jobDetails: {
    jobStartDateForm: {
      startDate: '2021-09-09'
    }
  },
};

@Injectable()
export class BillingInfoFormService {

  public billingInfoFormState: BehaviorSubject<BillingInfoFormValues> = new BehaviorSubject(defualtBillingInfoFormState);

  constructor() { }
}
