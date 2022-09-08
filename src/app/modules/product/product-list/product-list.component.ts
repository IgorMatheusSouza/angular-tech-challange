import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductListResult } from '../models/productListResult';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((response: ProductListResult) => {
        this.products = response.products;
        console.log(this.products);
        console.log(this.products[0].title);
      });
  }

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
