import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
//import { LoadersCssModule } from 'angular2-loaders-css';

import {HeaderModule} from '../../modules/header/app.header.module';

import {HomePageComponent} from './home.page.component';

@NgModule({
    imports : [CommonModule, RouterModule, HeaderModule],
    declarations : [HomePageComponent],
    exports : [HomePageComponent]
})

export class HomePageModule {}