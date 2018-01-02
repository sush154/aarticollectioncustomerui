import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "../../../modules/header/app.header.module";
import { RouterModule } from "@angular/router";

import { HomeCarouselModule } from "../../../modules/carousel/homeCarousel/app.home.carousel.module";
import { PopularProductModule } from "../../../modules/carousel/popularProduct/app.popular.product.module";
import { NewProductsModule } from "../../../modules/carousel/newProducts/app.new.products.module";

import { ProductsListComponent } from "./app.products.list.component";

@NgModule({
    imports : [CommonModule, HeaderModule, RouterModule, HomeCarouselModule, PopularProductModule, NewProductsModule],
    declarations : [ProductsListComponent],
    exports : [ProductsListComponent]
})

export class ProductsListModule{}
