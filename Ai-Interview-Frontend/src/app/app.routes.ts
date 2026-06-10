import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. The Public Homepage (Loaded immediately at http://localhost:4200/)
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/pages/landing-page/landing-page').then((m) => m.LandingPage),
    pathMatch: 'full', // Crucial so it doesn't conflict with child routes
  },

  // 2. Authentication Features (http://localhost:4200/auth/login)
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard/dashboard').then((m) => m.DashboardComponent),
  },
  {
    path: 'interview',
    loadComponent: () =>
      import('./features/dashboard/pages/interview/interview').then((m) => m.InterviewComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },

  // 3. Main Dashboard Features (Protected/Internal pages like http://localhost:4200/dashboard)
  {
    path: 'pages',
    loadChildren: () =>
      import('./features/landing/landing.routes').then((m) => m.dashboardRoutes),
  },

  // 4. Fallback/Catch-all route
  {
    path: '**',
    redirectTo: '',
  },
];
