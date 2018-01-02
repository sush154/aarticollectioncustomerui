import {NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";

import { PopularProductsCarouselComponent } from "./app.popular.product.component";

@NgModule({
    imports : [CommonModule],
    declarations : [PopularProductsCarouselComponent],
    exports : [PopularProductsCarouselComponent]
})

export class PopularProductModule {}