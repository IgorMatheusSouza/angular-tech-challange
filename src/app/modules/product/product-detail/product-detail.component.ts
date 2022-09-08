import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
  }
  share() {
    window.alert('The product has been shared!');
  }
}
