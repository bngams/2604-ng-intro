import { Component, inject } from '@angular/core';
import { PRODUCTS } from '../../mocks/prodcut-data.mock';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  private productService = inject(ProductService);

  products!: Product[];
  products$ = this.productService.products;

  constructor() {
    console.log('ProductList component created');
  }

  ngOnInit() {
    //this.initData();
    this.initDataWithService();
  }

  initData() {
    this.products = PRODUCTS;
  }

  initDataWithService() {
    this.productService.loadProducts();
  }
}
