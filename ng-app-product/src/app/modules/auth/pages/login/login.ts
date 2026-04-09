import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { LoginCredentials } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = false;
  errorMessage = '';

  async handleLogin(credentials: LoginCredentials): Promise<void> {
    this.isLoading = true;
    this.errorMessage = '';

    const success = await this.authService.login(credentials);

    this.isLoading = false;

    if (success) {
      // Redirection vers la page products après connexion
      this.router.navigate(['/products']);
    } else {
      this.errorMessage = 'Identifiants invalides';
    }
  }
}
