import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { ProductModule } from './modules/product/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ProductModule,
    AppRoutingModule,
  ],
  declarations: [AppRoutingModule.components, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
