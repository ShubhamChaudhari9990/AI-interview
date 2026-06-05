import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./features/dashboard/pages/home/home').then(m => m.HomeComponent)
	}
];
