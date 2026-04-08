import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { DetailsPage } from './pages/details-page/details-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'details/:id', component: DetailsPage },
  // /!\ ** => capture all flags => at the end
  { path: '**', component: NotFoundPage },
];
