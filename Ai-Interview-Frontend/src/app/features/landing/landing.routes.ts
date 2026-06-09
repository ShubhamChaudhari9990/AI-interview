import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'about-Us',
    loadComponent: () =>
      import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog-listing',
    loadComponent: () =>
      import('./pages/blog-listing/blog-listing').then((m) => m.BlogListing),
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers').then((m) => m.Careers),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'enterprise',
    loadComponent: () =>
      import('./pages/enterprise/enterprise').then((m) => m.Enterprise),
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.Faq),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features/features').then((m) => m.Features),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing').then((m) => m.Pricing),
  },
];
