import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './pages/login/login';
import { LoginForm } from './components/login-form/login-form';
import { LoginIcon } from './components/login-icon/login-icon';
import { UIModule } from '../ui/ui-module';

@NgModule({
  declarations: [Login, LoginForm, LoginIcon],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, UIModule],
  exports: [LoginIcon]
})
export class AuthModule {}
