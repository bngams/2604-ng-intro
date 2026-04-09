import { Product } from "../../product/models/product";

export type CartItem = {
  product: Product;
  quantity: number;
}

export type Cart = {
  items: CartItem[];
}
