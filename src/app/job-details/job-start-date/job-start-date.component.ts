import { CustomValidators } from 'src/app/custom-validators';
import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormGroup,
  Validator,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormBuilder,
} from '@angular/forms';
import { UserInfoFormService } from 'src/app/user-info-form.service';

@Component({
  selector: 'app-job-start-date',
  templateUrl: './job-start-date.component.html',
  styleUrls: ['./job-start-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JobStartDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => JobStartDateComponent),
      multi: true
    }
  ]
})
export class JobStartDateComponent implements OnInit, ControlValueAccessor, Validator {

  get jobStartDate(): number {
    return this.jobStartDateForm.get('date').value;
  }

  public jobStartDateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private billingInfoFormService: UserInfoFormService
    ) {
    this.jobStartDateForm = this.fb.group({
      date: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit() {
    this.billingInfoFormService.billingInfoFormState.subscribe(val => {
      const minDate = new Date(val.basicInfo.dateOfBirthForm.date);
      this.jobStartDateForm.get('date').setValidators([ 
        Validators.required, 
        CustomValidators.minDate(minDate)
      ]);
      this.jobStartDateForm.get('date').updateValueAndValidity({ emitEvent: false }); 
    });
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    // tslint:disable-next-line:no-unused-expression
    val && this.jobStartDateForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.jobStartDateForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.jobStartDateForm.disable() : this.jobStartDateForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Job start date validation', c.errors);
    return this.jobStartDateForm.valid ? null : { invalidForm: {valid: false, message: 'Job start date fields are invalid'}};
  }

}
