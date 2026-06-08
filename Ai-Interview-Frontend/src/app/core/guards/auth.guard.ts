import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  canActivate() {
    return this.authService.currentUser$.pipe(
      map((user) => !!user),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth/login']);
        }
      }),
      take(1),
    );
  }
}
