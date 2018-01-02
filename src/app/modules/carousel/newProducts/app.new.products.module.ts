import {NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";

import { NewProductsComponent } from "./app.new.products.component";

@NgModule({
    imports : [CommonModule],
    declarations : [NewProductsComponent],
    exports : [NewProductsComponent]
})

export class NewProductsModule {}