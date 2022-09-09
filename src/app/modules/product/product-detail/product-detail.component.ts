import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [
    './product-detail.component.css',
    '../../../shared/style/product-base.component.css',
  ],
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  mainImageIndex: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    var id: string | null = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/product']);
    }
    this.getProduct(id ?? '');
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe(
      (response: Product) => {
        this.product = response;
      },
      (err) => {
        // Could perform a specific action in case of error
        console.log('Not able to get product, error:' + err.error);
      }
    );
  }
}
