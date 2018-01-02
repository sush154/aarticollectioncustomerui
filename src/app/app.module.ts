import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { RouterModule } from "@angular/router";


import {HomePageModule} from './pages/home/home.page.module';
import {HeaderModule} from './modules/header/app.header.module';
import { HomeCarouselModule } from "./modules/carousel/homeCarousel/app.home.carousel.module";
import { PopularProductModule } from "./modules/carousel/popularProduct/app.popular.product.module";
import { NewProductsModule } from "./modules/carousel/newProducts/app.new.products.module";
import { ProductsListModule } from "./pages/products/list/app.products.list.module";
import { AppRouterModule } from "./modules/router/app.router.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HomePageModule, HeaderModule, HttpModule, HomeCarouselModule, PopularProductModule, NewProductsModule,
    ProductsListModule, AppRouterModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
