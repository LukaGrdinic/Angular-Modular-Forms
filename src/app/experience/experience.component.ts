import { BillingInfoFormService } from './../billing-info-form.service';
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
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExperienceComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ExperienceComponent),
      multi: true
    }
  ]
})
export class ExperienceComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() age = 0;

  public experienceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private billingInfoFormService: BillingInfoFormService
    ) {
    this.experienceForm = this.fb.group({
      experience: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit() {
    this.billingInfoFormService.billingInfoFormState.subscribe(val => {
      this.experienceForm.get('experience').setValidators([ Validators.required, Validators.max(val.ageForm.age)]);
      this.experienceForm.get('experience').updateValueAndValidity({ emitEvent: false }); 
    });
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    // tslint:disable-next-line:no-unused-expression
    val && this.experienceForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.experienceForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.experienceForm.disable() : this.experienceForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Experience Info validation', c.errors);
    return this.experienceForm.valid ? null : { invalidForm: {valid: false, message: 'experience fields are invalid'}};
  }

}
