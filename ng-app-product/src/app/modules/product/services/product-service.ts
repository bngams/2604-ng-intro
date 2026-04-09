import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // API base URL can be moved to environment variables or a config file
  private readonly API_BASE_URL = 'https://dummyjson.com/';
  private readonly PRODUCTS_API_URL = `${this.API_BASE_URL}products`;

  // inject HttpClient to make API calls (http features must be provided in the app module, or app config if using a standalone app)
  private http = inject(HttpClient);

  // signal, subject or any reactive wrapper to store the products and update the UI correctly when it changes
  products = signal<Product[]>([]);

  loadProducts() {
    const observer = {
      next: (response: ProductResponse) => {
        console.log('Products loaded:', response);
        this.products.set(response.products);
      },
      error: (error: any) => {
        console.error('Error loading products:', error);
      },
      complete: () => {
        console.log('Products loaded successfully');
      }
    }
    this.http.get<ProductResponse>(this.PRODUCTS_API_URL).subscribe(observer);

    // this.http.get<ProductResponse>(this.PRODUCTS_API_URL).subscribe((response) => {
    //   this.products.set(response.products);
    // });
  }

  addProduct(newProduct: Product) {
    // this.http.post<Product>(this.PRODUCTS_API_URL, newProduct).subscribe((newProduct) => {
      this.products.update((products) => [...products, newProduct]);
    //}).unsubscribe();
  }
}
