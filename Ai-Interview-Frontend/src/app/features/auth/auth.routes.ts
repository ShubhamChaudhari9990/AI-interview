import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then((m) => m.Login),
    title: 'Sign In – InterviewAI',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then((m) => m.Register),
    title: 'Create Account – InterviewAI',
  },
  {
    path: 'check-inbox',
    loadComponent: () =>
      import('./pages/check-inbox/check-inbox').then((m) => m.CheckInbox),
    title: 'Check Your Inbox – InterviewAI',
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password').then(
        (m) => m.ForgotPassword,
      ),
    title: 'Forgot Password – InterviewAI',
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./pages/reset-password/reset-password').then(
        (m) => m.ResetPassword,
      ),
    title: 'Reset Password – InterviewAI',
  },
];
