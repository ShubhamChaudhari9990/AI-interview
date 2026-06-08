import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, Header, Footer],
  standalone: true,
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainLayout {
  showLayout = true;

  constructor(private router: Router) {
    this.updateLayout(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateLayout(event.urlAfterRedirects);
      });
  }

  private updateLayout(url: string): void {
    // Hide global header/footer on auth flow pages
    const authRoutesWithoutLayout = [
      '/auth/login',
      '/auth/register',
      '/auth/check-inbox',
      '/auth/forgot-password',
      '/auth/reset-password',
    ];

    this.showLayout = !authRoutesWithoutLayout.some(
      (route) => url === route || url.startsWith(`${route}?`),
    );
  }
}
