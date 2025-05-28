import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;

  const errors: ValidationErrors = {};

  if (!/[A-Z]/.test(value)) {
    errors['missingUppercase'] = true;
  }
  if (!/[a-z]/.test(value)) {
    errors['missingLowercase'] = true;
  }
  if (!/\d/.test(value)) {
    errors['missingNumber'] = true;
  }
  if (!/[\W_]/.test(value)) {
    errors['missingSymbol'] = true;
  }

  return Object.keys(errors).length ? errors : null;
}