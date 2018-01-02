import { Component } from "@angular/core";
import { ProductProvider } from "../../../providers/product/app.product.provider";

@Component({
    selector : 'products-list',
    templateUrl : 'app.products.list.component.html',
    styleUrls : ['app.products.list.component.css'],
    providers : [ProductProvider]
})

export class ProductsListComponent {

    constructor(private productProvider : ProductProvider){}
}