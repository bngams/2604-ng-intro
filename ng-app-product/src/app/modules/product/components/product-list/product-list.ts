import { Component } from '@angular/core';
import { PRODUCTS } from '../../mocks/prodcut-data.mock';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products!: Product[];

  constructor() {
    console.log('ProductList component created');
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.products = PRODUCTS;
  }
}
