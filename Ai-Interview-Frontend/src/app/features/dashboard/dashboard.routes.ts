import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

export const dashboardRoutes: Routes = [
  {
    path: 'landing',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./../landing/pages/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'about-us',
    canActivate: [AuthGuard],
    loadComponent: () => import('./../landing/pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'blog',
    canActivate: [AuthGuard],
    loadComponent: () => import('./../landing/pages/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog-listing',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./../landing/pages/blog-listing/blog-listing').then((m) => m.BlogListing),
  },
  {
    path: 'careers',
    canActivate: [AuthGuard],
    loadComponent: () => import('./../landing/pages/careers/careers').then((m) => m.Careers),
  },
  {
    path: 'contact-us',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./../landing/pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'enterprise',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./../landing/pages/enterprise/enterprise').then((m) => m.Enterprise),
  },
  {
    path: 'faq',
    canActivate: [AuthGuard],
    loadComponent: () => import('./../landing/pages/faq/faq').then((m) => m.Faq),
  },
  {
    path: 'features',
    canActivate: [AuthGuard],
    loadComponent: () => import('./../landing/pages/features/features').then((m) => m.Features),
  },
  {
    path: 'pricing',
    canActivate: [AuthGuard],
    loadComponent: () => import('./../landing/pages/pricing/pricing').then((m) => m.Pricing),
  },
];
