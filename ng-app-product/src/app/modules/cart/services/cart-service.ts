import { Injectable, signal } from "@angular/core";
import { Cart, CartItem } from "../models/cart";
import { Product } from "../../product/models/product";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {

  public simpleCartItems: CartItem[] = [];
  public signalCartItems = signal<CartItem[]>([]);

  // rxjs et observable pour stocker les produits du panier => ancetres de signals
  public subjectCartItems = new Subject<CartItem[]>();

  // variable simple pour stocker les produits du panier
  // mode public pour faciliter l'accès depuis les composants
  // public cartItems: any[] = signal([]);

  // type plus complexe pour stocker les produits du panier
  // mode privé pour forcer l'utilisation de méthodes dédiées pour manipuler le panier
  // private cartItems = signal<CartItem[]>([]);

  // type panier complet avec portée privee et méthodes dédiées
  private cart = signal<Cart>({ items: [] });

  addToSignalCartItems(product: Product, quantity: number = 1) {
    this.signalCartItems.update(items => [...items, { product, quantity }]);
  }

  addToSubjectCartItems(product: Product, quantity: number = 1) {
    this.subjectCartItems.next([...this.signalCartItems(), { product, quantity }]);
  }

  addToCart(product: Product) {
    // this.cartItems.update(items => [...items, product]);
    this.cart.update(cart => {
      const existingItem = cart.items.find(item => item.product.id === product.id);
      if (existingItem) {
        return {
          ...cart,
          items: cart.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...cart,
          items: [...cart.items, { product, quantity: 1 }]
        };
      }
    });
  }

  getCart() {
    return this.cart.asReadonly();
  }

  getCartQuantity(): number {
    const item = this.cart().items.reduce((acc, item) => acc + item.quantity, 0);
    return item ? item : 0;
  }
}
