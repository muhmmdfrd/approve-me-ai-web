import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
];

export const NOT_FOUND_ROUTES = RouterModule.forChild(routes);
