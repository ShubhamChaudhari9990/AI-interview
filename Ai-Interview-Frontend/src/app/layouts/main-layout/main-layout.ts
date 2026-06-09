import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

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
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const hiddenRoutes = [
          '/auth/login',
          '/auth/register',
          '/auth/check-inbox',
          '/auth/forgot-password',
          '/auth/reset-password',
        ];

        this.showLayout = !hiddenRoutes.includes(event.urlAfterRedirects);
      });
  }
}
