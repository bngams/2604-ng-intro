import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../../cart/services/cart-service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  private cartService = inject(CartService);

  // property binding [product]
  product = input.required<Product>();

  buy() {
    console.log('Adding product to cart', this.product());

    // with the simple attribute, we can directly manipulate the array (not optimized for performance)
    this.cartService.simpleCartItems.push({
      product: this.product(),
      quantity: 1,
    });

    // with the signal, we need to use the update method to trigger change detection
    this.cartService.addToSignalCartItems(this.product(), 1);
  }
}
