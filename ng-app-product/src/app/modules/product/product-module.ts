import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductCard } from './components/product-card/product-card';
import { ProductList } from './components/product-list/product-list';
import { ProductForm } from './components/product-form/product-form';
import { ProductDashboard } from './pages/product-dashboard/product-dashboard';
import { UIModule } from '../ui/ui-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductCard, ProductList, ProductForm, ProductDashboard],
  imports: [UIModule, CommonModule, ProductRoutingModule, ReactiveFormsModule],
})
export class ProductModule {}
