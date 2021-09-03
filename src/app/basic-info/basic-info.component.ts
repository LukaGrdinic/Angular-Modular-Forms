import { Component, OnInit, forwardRef, Output, EventEmitter } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormGroup,
  FormControl,
  Validator,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    }
  ]
})
export class BasicInfoComponent implements OnInit, ControlValueAccessor, Validator {

  public basicInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.basicInfoForm = this.fb.group({
      fname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateOfBirth: [ '' ],
    });
   }

  ngOnInit() {}

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    // tslint:disable-next-line:no-unused-expression
    val && this.basicInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.basicInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicInfoForm.disable() : this.basicInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Basic Info validation', c);
    return this.basicInfoForm.valid ? null : { invalidForm: {valid: false, message: 'basicInfoForm fields are invalid'}};
  }

}
