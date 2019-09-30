import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData } from './login.model';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  LoginForm(form: NgForm) {
    const data: LoginData = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      password: form.value.password,
      cpassword: form.value.confirmpassword
    };
  }

}
