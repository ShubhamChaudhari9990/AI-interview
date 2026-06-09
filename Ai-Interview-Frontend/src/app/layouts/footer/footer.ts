import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  companyLinks = [
    { label: 'About', route: 'about-Us' },
    { label: 'Careers', route: 'careers' },
    { label: 'Blog', route: 'blog' }
  ];
  productLinks = [
    { label: 'Features', route: 'features' },
    { label: 'Pricing', route: 'pricing' },
    { label: 'Enterprise', route: 'enterprise' }
  ];
  legalLinks = [
    { label: 'Privacy', route: 'contact-us' },
    { label: 'Terms', route: 'faq' }
  ];
  supportLinks = [
    { label: 'Help Center', route: 'faq' },
    { label: 'Contact', route: 'contact-us' }
  ];
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate(['landing/', route]);
    window.scrollTo(0, 0);
  }
}
