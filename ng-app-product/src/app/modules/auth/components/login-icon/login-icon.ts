import { Component, inject } from "@angular/core";
import { AuthService } from "../../services/auth-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-icon',
  standalone: false,
  template: `
    @if (authService.isAuthenticated()) {
      <button matIconButton [matMenuTriggerFor]="userMenu" class="example-icon" aria-label="User menu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #userMenu="matMenu">
        <div mat-menu-item disabled class="user-info">
          <mat-icon>person</mat-icon>
          <span>{{ authService.currentUser()?.username }}</span>
        </div>
        <mat-divider></mat-divider>
        <button mat-menu-item (click)="logout()">
          <mat-icon>logout</mat-icon>
          <span>Se déconnecter</span>
        </button>
      </mat-menu>
    } @else {
      <button matIconButton routerLink="/login" class="example-icon" aria-label="Login">
        <mat-icon>login</mat-icon>
      </button>
    }
  `,
  styles: `
    .user-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      pointer-events: none;
      opacity: 0.7;
    }
  `,
})
export class LoginIcon {
  authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
  }
}
