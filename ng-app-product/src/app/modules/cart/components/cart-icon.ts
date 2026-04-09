import { Component, inject } from "@angular/core";
import { CartService } from "../services/cart-service";

@Component({
  selector: 'app-cart-icon',
  standalone: false,
  template: `
    <button matIconButton routerLink="/cart" class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
      <!-- direct usage of a simple variable can work, but not optimized for performance and lifecycle {{ cartService.simpleCartItems.length }} -->
      <mat-icon matBadge="{{ cartService.signalCartItems().length }}">
        shopping_cart
      </mat-icon>
    </button>
  `,
  styles: ``,
})
export class CartIcon {

  readonly cartService = inject(CartService);

}
