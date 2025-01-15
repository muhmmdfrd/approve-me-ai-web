import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'prefix',
      },
      {
        path: 'welcome',
        loadChildren: () =>
          import('./welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
      },
    ],
  },
];
