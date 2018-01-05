import { Component, OnInit } from "@angular/core";
import { ProductProvider } from "../../../providers/product/app.product.provider";

@Component({
    selector : 'products-list',
    templateUrl : 'app.products.list.component.html',
    styleUrls : ['app.products.list.component.css'],
    providers : [ProductProvider]
})

export class ProductsListComponent implements OnInit{

    private criteria : any;

    constructor(private productProvider : ProductProvider){}

    private getProductsOnCriteria(criteria : any) : void {
      this.productProvider.getProductsListOnCriteria(criteria).then(res => {
        console.log(res);
      })
    }

    ngOnInit() : void {
      console.log(JSON.parse(localStorage.getItem('criteria')));
      this.criteria = JSON.parse(localStorage.getItem('criteria'));
      //localStorage.removeItem('criteria');
      this.getProductsOnCriteria(this.criteria);
    }
}
