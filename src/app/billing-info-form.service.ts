import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BillingInfoFormValues {
  basicInfo: {
    fname: string,
    email: string,
    dateOfBirthForm: {
      date: Date
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
      startDate: Date
    }
  },
}

export const defualtBillingInfoFormState: BillingInfoFormValues = {
  basicInfo: {
    fname: 'Marko',
    email: 'markomarkovic@gmail.com',
    dateOfBirthForm: {
      date: new Date()
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
      startDate: new Date()
    }
  },
};

@Injectable()
export class BillingInfoFormService {

  public billingInfoFormState: BehaviorSubject<BillingInfoFormValues> = new BehaviorSubject(defualtBillingInfoFormState);

  constructor() { }
}
