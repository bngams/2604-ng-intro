import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginCredentials } from '../../models/user';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  @Output() submitLogin = new EventEmitter<LoginCredentials>();

  private fb = inject(FormBuilder);

  loginForm: FormGroup;
  hidePassword = true;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.submitLogin.emit(this.loginForm.value);
    }
  }

  get usernameControl() {
    return this.loginForm.get('username');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }
}
