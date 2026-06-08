import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'about-Us',
    loadComponent: () =>
      import('./features/dashboard/pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/dashboard/pages/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog-listing',
    loadComponent: () =>
      import('./features/dashboard/pages/blog-listing/blog-listing').then((m) => m.BlogListing),
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./features/dashboard/pages/careers/careers').then((m) => m.Careers),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./features/dashboard/pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'enterprise',
    loadComponent: () =>
      import('./features/dashboard/pages/enterprise/enterprise').then((m) => m.Enterprise),
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/dashboard/pages/faq/faq').then((m) => m.Faq),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./features/dashboard/pages/features/features').then((m) => m.Features),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/dashboard/pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./features/dashboard/pages/pricing/pricing').then((m) => m.Pricing),
  },
];
