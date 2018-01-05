import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
//import { LoadersCssModule } from 'angular2-loaders-css';

import {HeaderModule} from '../../modules/header/app.header.module';
import { HomeCarouselModule } from "../../modules/carousel/homeCarousel/app.home.carousel.module";
import { PopularProductModule } from "../../modules/carousel/popularProduct/app.popular.product.module";
import { NewProductsModule } from "../../modules/carousel/newProducts/app.new.products.module";

import {HomePageComponent} from './home.page.component';

@NgModule({
    imports : [CommonModule, RouterModule, HeaderModule, HomeCarouselModule, PopularProductModule, NewProductsModule],
    declarations : [HomePageComponent],
    exports : [HomePageComponent]
})

export class HomePageModule {}
