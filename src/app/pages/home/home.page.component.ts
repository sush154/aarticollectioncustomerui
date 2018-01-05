import {Component, OnInit} from '@angular/core';

declare var ResCarouselOnInit : any;

@Component({
    selector : 'home-page',
    templateUrl: 'home.page.component.html',
    styleUrls : ['home.page.component.css', 'resCarousel.css']
})

export class HomePageComponent implements OnInit{


  ngOnInit() : void {
    new ResCarouselOnInit();
  }
}
