import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nameValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;

  const errors: ValidationErrors = {};

  if (value.length < 2) {
    errors['minlength'] = { requiredLength: 2, actualLength: value.length };
  }

  const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
  if (pattern.test(value)) {
    return null;
  } 
  else 
  {
    const invalidChars = value
      .split('')
      .filter(ch => !pattern.test(ch))
      .filter((ch, i, arr) => arr.indexOf(ch) === i);
    
    errors['invalidChars'] = invalidChars;
  }


  return Object.keys(errors).length ? errors : null;
}