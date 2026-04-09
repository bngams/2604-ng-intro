import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing-module';
import { Cart } from './pages/cart';
import { UIModule } from '../ui/ui-module';
import { CartIcon } from './components/cart-icon';

@NgModule({
  declarations: [Cart, CartIcon],
  imports: [CommonModule, CartRoutingModule, UIModule],
  exports: [CartIcon]
})
export class CartModule {}
