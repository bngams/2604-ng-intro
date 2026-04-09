import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { About } from './pages/about/about';
import { authGuard } from './modules/auth/guards/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'login', loadChildren: () => import('./modules/auth/auth-module').then(m => m.AuthModule) },
  // lazy load the product module when the user navigates to /products
  // loadChildren is a function that returns a promise that resolves to the module class
  // possible with modules or components that are decorated with @NgModule or @Component with standalone: true
  {
    path: 'products',
    loadChildren: () => import('./modules/product/product-module').then(m => m.ProductModule),
    canActivate: [authGuard]
  },
  { path: 'cart', loadChildren: () => import('./modules/cart/cart-module').then(m => m.CartModule) },
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
