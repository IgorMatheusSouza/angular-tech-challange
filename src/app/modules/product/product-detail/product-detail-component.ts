import { Component } from '@angular/core';

import { products } from '../models/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
