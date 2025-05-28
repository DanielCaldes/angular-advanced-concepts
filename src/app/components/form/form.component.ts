import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormErrorComponent } from '../form-error/form-error.component';
import { passwordValidator, phoneValidator, nameValidator} from '../../utils/validators/validators';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormErrorComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  validateAdult(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value) return null;

    const today = new Date();
    const birthDate = new Date(control.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 18 ? null : { 'notAdult': true };
  }
  register :FormGroup;

  constructor(private fb:FormBuilder){
    this.register = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(2), nameValidator]],
      surname: ['',[Validators.required, Validators.minLength(2), nameValidator]],
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8), passwordValidator]],
      phone: ['',[Validators.required, phoneValidator]],
      birthdate: ['',[Validators.required, this.validateAdult]],
      address: ['',[Validators.required, Validators.minLength(5)]],
    });
  }

  submit() {

    const {
      name,
      surname,
      email,
      password,
      phone,
      birthdate,
      address
    } = this.register.value;

    const maskedPassword = password
      ? password[0] + '*'.repeat(password.length - 1)
      : '';

    const response = `Datos usuario:
      Name: ${name}
      Surname: ${surname}
      Email: ${email}
      Password: ${maskedPassword}
      Phone: ${phone}
      Birthdate: ${birthdate}
      Address: ${address}
    `;

    console.log(response);

    alert(response);
  }
}
