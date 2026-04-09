import { Component, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-product-dashboard',
  standalone: false,
  templateUrl: './product-dashboard.html',
  styleUrl: './product-dashboard.scss',
})
export class ProductDashboard {

  // #myProductListComponent
  @ViewChild(ProductList) productListComponent!: ProductList;

  addProductToList(product: Product) {
    console.log('New product received in dashboard', product);
    this.productListComponent.products.push(product);
  }

  ngOnInit() {
    console.log('ProductDashboard component init');
    console.log('Product list component instance', this.productListComponent);
  }

  ngAfterViewInit() {
    console.log('ProductDashboard component view init');
    console.log('Product list component instance', this.productListComponent);
  }
}
