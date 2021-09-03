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
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: [ './address.component.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor, Validator {

  public addressInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressInfoForm = this.fb.group({
      address: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit() {
    console.log('addressInfoForm', this.addressInfoForm);
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    // tslint:disable-next-line:no-unused-expression
    val && this.addressInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.addressInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressInfoForm.disable() : this.addressInfoForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Address Info validation', c.errors);
    return this.addressInfoForm.valid ? null : { invalidForm: {valid: false, message: 'addressInfoForm fields are invalid'}};
  }

}
