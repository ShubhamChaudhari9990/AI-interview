import { Routes } from '@angular/router';


export const authRoutes: Routes = [

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login')
        .then(m => m.Login)
  },

  // {
  //   path: 'register',
  //   loadComponent: () =>
  //     import('./features/auth/pages/register/register.component')
  //       .then(m => m.RegisterComponent)
  // },

  // {
  //   path: 'dashboard',
  //   canActivate: [authGuard],
  //   loadComponent: () =>
  //     import('./features/dashboard/pages/dashboard/dashboard.component')
  //       .then(m => m.DashboardComponent)
  // },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
