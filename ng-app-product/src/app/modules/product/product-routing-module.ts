import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboard } from './pages/product-dashboard/product-dashboard';

// in app-routing-module.ts we will have a parent route like this: /products ...
const routes: Routes = [
  { path: '', component: ProductDashboard },
  // details ... 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
