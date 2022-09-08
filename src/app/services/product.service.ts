import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Product } from '../modules/product/models/product';
import { ProductListResult } from '../modules/product/models/productListResult';

@Injectable()
export class ProductService extends BaseService {
  private apiUrl = this.baseUrl + 'products';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getProducts() {
    return this.http.get<ProductListResult>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post(this.apiUrl, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateProduct(Product: Product) {
    const url = `${this.apiUrl}/${Product.id}`;

    return this.http.put(url, Product);
  }

  getFilteredData(
    filter: string,
    page: number,
    pageSize: number
  ): Observable<any> {
    return this.http.get(this.apiUrl, {
      params: {
        _page: page.toString(),
        _limit: pageSize.toString(),
        q: filter,
      },
    });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${value}`);
  }
}