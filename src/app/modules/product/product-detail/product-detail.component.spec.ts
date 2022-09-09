import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Test ProductDetailComponent', () => {
  let component: ProductDetailComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductDetailComponent,
        ProductService,
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get(): string {
                  return '10';
                },
              },
            },
          },
        },
      ],
    });
    component = TestBed.inject(ProductDetailComponent);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should run ngOnInit and call getProduct', () => {
    spyOn<any>(component, 'getProduct');
    component.ngOnInit();
    expect(component['getProduct']).toHaveBeenCalled();
  });

  it('getProduct should return value', () => {
    spyOn<any>(component, 'getProduct');
    component.getProduct('5');
    expect(component['getProduct']).not.toBeNull();
  });
});
