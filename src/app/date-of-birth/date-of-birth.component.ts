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
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateOfBirthComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateOfBirthComponent),
      multi: true
    }
  ]
})
export class DateOfBirthComponent implements OnInit, ControlValueAccessor, Validator {

  get dateOfBirth(): number {
    return this.dateOfBirthForm.get('date').value;
  }

  public dateOfBirthForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateOfBirthForm = this.fb.group({
      date: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit() {}

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    // tslint:disable-next-line:no-unused-expression
    val && this.dateOfBirthForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.dateOfBirthForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.dateOfBirthForm.disable() : this.dateOfBirthForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Date of birth validation', c.errors);
    return this.dateOfBirthForm.valid ? null : { invalidForm: {valid: false, message: 'Date of birth fields are invalid'}};
  }

}
