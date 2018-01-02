import { Component, OnInit } from "@angular/core";

import { ProductProvider } from "../../../providers/product/app.product.provider";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector : 'new-products',
    templateUrl : './app.new.products.component.html',
    styleUrls : ['./app.new.products.component.css', './resCarousel.css'],
    providers : [ProductProvider]
})

export class NewProductsComponent implements OnInit{

    private productsList : any;

    constructor(private productProvider : ProductProvider,
        private sanitizer: DomSanitizer){}

    private getNewProducts() : void{
        this.productProvider.getNewProducts().then(res => {
            if(res.status === 200){
                this.productsList = res.product;
            }
        })
    }

    ngOnInit() : void {
        this.getNewProducts();
    }
}
