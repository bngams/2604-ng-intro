import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSession, LoginCredentials, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly SESSION_KEY = 'auth_session';

  // Signal pour gérer l'état de connexion
  currentUser = signal<User | null>(null);
  isAuthenticated = signal<boolean>(false);

  constructor(private router: Router) {
    this.loadSession();
  }

  /**
   * Simule une connexion utilisateur
   */
  login(credentials: LoginCredentials): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulation d'un délai réseau
      setTimeout(() => {
        // Simulation simple: accepter n'importe quel utilisateur
        if (credentials.username && credentials.password) {
          const user: User = {
            id: 1,
            username: credentials.username,
            email: `${credentials.username}@example.com`
          };

          const session: AuthSession = {
            user,
            token: this.generateFakeToken(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24h
          };

          this.saveSession(session);
          this.currentUser.set(user);
          this.isAuthenticated.set(true);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  }

  /**
   * Déconnecte l'utilisateur
   */
  logout(): void {
    this.deleteSession();
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/home']);
  }

  /**
   * Sauvegarde la session dans le localStorage
   */
  private saveSession(session: AuthSession): void {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  }

  /**
   * Charge la session depuis le localStorage
   */
  private loadSession(): void {
    const sessionData = localStorage.getItem(this.SESSION_KEY);
    if (sessionData) {
      try {
        const session: AuthSession = JSON.parse(sessionData);
        const expiresAt = new Date(session.expiresAt);

        // Vérifier si la session n'est pas expirée
        if (expiresAt > new Date()) {
          this.currentUser.set(session.user);
          this.isAuthenticated.set(true);
        } else {
          this.deleteSession();
        }
      } catch (error) {
        console.error('Error loading session:', error);
        this.deleteSession();
      }
    }
  }

  /**
   * Supprime la session du localStorage
   */
  private deleteSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  /**
   * Génère un faux token pour la simulation
   */
  private generateFakeToken(): string {
    return 'fake-jwt-token-' + Math.random().toString(36).substring(2);
  }
}
