import { Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { LoginGuard } from './core/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./pages/login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'admin',
    canActivateChild: [AdminGuard],
    loadChildren: () =>
      import('./module/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
