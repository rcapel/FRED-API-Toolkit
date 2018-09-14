import { ValidatorFn, AbstractControl } from "@angular/forms";

export class NumericValidators {

  static range(minimum: number, maximum: number): ValidatorFn {
    let rangeFunction = function(control: AbstractControl): { [key: string]: boolean } | null {
      let value = control.value;
      if (value && (isNaN(value) || value < minimum || value > maximum)) {
        return { "range": true };
      }
      return null;
    }
    return rangeFunction;
  }
}
