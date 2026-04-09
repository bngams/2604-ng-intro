import { Component, computed, inject, signal, WritableSignal } from "@angular/core";
import { CartService } from "../services/cart-service";
import { CartItem } from "../models/cart";

@Component({
  selector: 'app-cart-icon',
  standalone: false,
  template: `
    <button matIconButton routerLink="/cart" class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
      <!-- direct usage of a simple variable can work, but not optimized for performance and lifecycle {{ cartService.simpleCartItems.length }} -->
      <mat-icon matBadge="{{ totalQuantity() }}" matBadgeColor="warn">
        shopping_cart
      </mat-icon>
    </button>
  `,
  styles: ``,
})
export class CartIcon {

  // inject the cart service to access the cart data
  private cartService = inject(CartService);

  // direct usage of a signal in the template is possible, but not optimized for performance and lifecycle
  itemsSignal: WritableSignal<CartItem[]> = this.cartService.signalCartItems;

  items: CartItem[] = this.cartService.signalCartItems();

  // computed property to calculate the total quantity of items in the cart
  totalQuantity = computed(() => this.cartService.signalCartItems().length);

}
