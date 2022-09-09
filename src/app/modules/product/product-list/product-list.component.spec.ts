import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../../services/product.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Test ProductListComponent', () => {
  let component: ProductListComponent;

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

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should run ngOnInit and call getProducts', () => {
    spyOn<any>(component, 'getProducts');
    component.ngOnInit();
    expect(component['getProducts']).toHaveBeenCalled();
  });

  it('getProducts should return values', () => {
    spyOn<any>(component, 'getProducts');
    component.getProducts();
    expect(component['getProducts']).not.toBeNull();
  });
});
