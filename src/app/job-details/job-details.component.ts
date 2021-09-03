import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JobDetailsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => JobDetailsComponent),
      multi: true
    }
  ]
})
export class JobDetailsComponent implements OnInit, ControlValueAccessor, Validator {

  public jobDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobDetailsForm = this.fb.group({
      jobStartDateForm: ['', [ Validators.required ]]
    });
   }

  ngOnInit() {}

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    // tslint:disable-next-line:no-unused-expression
    val && this.jobDetailsForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.jobDetailsForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.jobDetailsForm.disable() : this.jobDetailsForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Job details validation', c);
    return this.jobDetailsForm.valid ? null : { invalidForm: {valid: false, message: 'Job details fields are invalid'}};
  }

}
