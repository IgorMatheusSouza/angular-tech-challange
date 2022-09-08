import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, ProductRoutingModule, HttpClientModule],
  declarations: [ProductRoutingModule.components],
  providers: [ProductService],
})
export class ProductModule {}
