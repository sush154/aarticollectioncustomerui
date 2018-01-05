import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "../../../modules/header/app.header.module";
import { RouterModule } from "@angular/router";


import { ProductsListComponent } from "./app.products.list.component";

@NgModule({
    imports : [CommonModule, HeaderModule, RouterModule],
    declarations : [ProductsListComponent],
    exports : [ProductsListComponent]
})

export class ProductsListModule{}
