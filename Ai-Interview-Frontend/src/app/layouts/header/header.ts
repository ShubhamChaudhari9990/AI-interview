import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isMenuOpen = false;

  router = inject(Router);

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(route: string): void {
    this.router.navigate(['landing/', route]);
    this.isMenuOpen = false;
    window.scrollTo(0, 0);
  }
}
