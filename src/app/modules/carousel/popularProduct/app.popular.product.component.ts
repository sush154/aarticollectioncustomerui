import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { ProductProvider } from "../../../providers/product/app.product.provider";

import {CMSURL} from '../../../common/app.service.url';


@Component({
    selector : 'popular-products-carousel',
    templateUrl : './app.popular.product.carousel.component.html',
    styleUrls : ['./app.popular.product.carousel.component.css'],
    providers : [ProductProvider]
})

export class PopularProductsCarouselComponent implements OnInit{

    private productsList : any;

    constructor(private productProvider : ProductProvider,
        private sanitizer: DomSanitizer){}

    /**
     * This product populates popular products
     */
    private getPopularProduct() : void {
        this.productProvider.getPopularProducts().then(res => {
            if(res.status === 200){
                this.productsList = res.product;
            }
        })
    }

    private getImageFromCMS(imagePath : any) : String {
        return CMSURL + "/getImg/"+ imagePath;
    }

    ngOnInit() : void {
        this.getPopularProduct();
    }
}
