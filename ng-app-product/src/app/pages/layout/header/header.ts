import { Component, inject } from '@angular/core';
import { CartService } from '../../../modules/cart/services/cart-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  cartService = inject(CartService);

}
