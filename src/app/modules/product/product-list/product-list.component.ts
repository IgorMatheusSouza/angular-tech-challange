import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductListResult } from '../models/productListResult';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [
    './product-list.component.css',
    '../../../shared/style/product-base.component.css',
  ],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response: ProductListResult) => {
        this.products = response.products;
      },
      (err) => {
        // Could perform an especific action in case of error
        console.log('Not able to get products, error:' + err.error);
        this.router.navigate(['/product']);
      }
    );
  }
}
