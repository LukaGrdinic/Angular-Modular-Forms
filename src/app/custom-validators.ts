import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static minDate(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isControlOk: boolean = control.value ? new Date(control.value) > minDate : true;
      if (!isControlOk) {
        return {
          minDate: true,
        };
      }
      return null;
    };
  }
}
