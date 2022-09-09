import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../../services/product.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductListComponent,
        ProductService,
        HttpClient,
        HttpHandler,
      ],
    });
    component = TestBed.inject(ProductListComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    spyOn<any>(component, 'getProducts');
    component.ngOnInit();
    expect(component['getProducts']).toHaveBeenCalled();
  });
});
