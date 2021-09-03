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
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgeComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AgeComponent),
      multi: true
    }
  ]
})
export class AgeComponent implements OnInit, ControlValueAccessor, Validator {

  get age(): number {
    return this.ageForm.get('age').value;
  }

  public ageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ageForm = this.fb.group({
      age: [ '', [ Validators.required ] ]
    });
  }

  ngOnInit() {}

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    // tslint:disable-next-line:no-unused-expression
    val && this.ageForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.ageForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.ageForm.disable() : this.ageForm.enable();
  }
  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Age Info validation', c.errors);
    return this.ageForm.valid ? null : { invalidForm: {valid: false, message: 'age fields are invalid'}};
  }

}
