import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorComponent } from '../form-error/form-error.component';
import { passwordValidator, phoneValidator, nameValidator, adultValidator} from '../../utils/validators/validators';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormErrorComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  
  register :FormGroup;

  constructor(private fb:FormBuilder){
    this.register = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(2), nameValidator]],
      surname: ['',[Validators.required, Validators.minLength(2), nameValidator]],
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8), passwordValidator]],
      phone: ['',[Validators.required, phoneValidator]],
      birthdate: ['',[Validators.required, adultValidator]],
      address: ['',[Validators.required, Validators.minLength(5)]],
    });
  }

  submit() {

    const userData: User = this.register.value;

    const maskedPassword = userData.password
    ? userData.password[0] + '*'.repeat(userData.password.length - 1)
    : '';

    const response = `Datos usuario:
      Name: ${userData.name}
      Surname: ${userData.surname}
      Email: ${userData.email}
      Password: ${maskedPassword}
      Phone: ${userData.phone}
      Birthdate: ${userData.birthdate}
      Address: ${userData.address}
    `;

    console.log(response);
    this.register.reset();
    alert(response);
  }
}
