import {Component, OnInit} from '@angular/core';

import {CategoryProvider} from '../../providers/category/app.category.provider';
import {PARENTCATEGORY} from '../../common/app.parent.category';

import { Router } from "@angular/router";

@Component({
    selector : 'app-header',
    templateUrl : 'app.header.component.html',
    styleUrls : ['app.header.component.css'],
    providers : [CategoryProvider]
})

export class HeaderComponent implements OnInit{

    private categoriesList : any = new Array();
    private parentCategoryList : any = PARENTCATEGORY;
    private selectedTab : string = '';

    constructor(private categoryProvider : CategoryProvider,
                private router : Router){}

    private getAllCategories() : void {
        this.categoryProvider.getAllCategories().then((res) => {
            if(res.status === 200){
                for(let c of res.category){
                    if(this.categoriesList[c.parentCategory]){
                        this.categoriesList[c.parentCategory].push(c);
                    }else {
                        this.categoriesList[c.parentCategory] = new Array();
                        this.categoriesList[c.parentCategory].push(c);
                    }
                }
            }

        });
        
    }


    private isOpen(tab : string) : void {
        
        if(tab !== ''){
            this.selectedTab = tab;
        }else {
            this.selectedTab = '';
        }
    }

    private goToProductsList(criteria : any) : void {
        this.router.navigate(['/products', criteria]);
    }

    ngOnInit() : void {
        this.getAllCategories();
    }
}