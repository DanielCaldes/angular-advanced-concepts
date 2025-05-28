import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;

  const valid = /^\+?\d{9,15}$/.test(value);
  return valid ? null : { invalidPhone: true };
}