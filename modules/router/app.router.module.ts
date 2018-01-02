import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductsListComponent } from "../../pages/products/list/app.products.list.component";
import { HomePageComponent } from "../../pages/home/home.page.component";

const routes : Routes = [
    {path : 'home', component : HomePageComponent},
    {path : 'products/:criteria', component : ProductsListComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRouterModule {}