import { Component, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {

  productForm!: FormGroup;

  newProduct = output<Product>();
  // @Output()
  // newProduct = new EventEmitter<Product>();

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
  }

  submit() {
    if (this.productForm.valid) {
      console.log('Form submitted', this.productForm.value);
      this.newProduct.emit(this.productForm.value);
      this.productForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

}
