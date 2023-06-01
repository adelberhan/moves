import { Component, Input, OnInit } from '@angular/core';
import { Services } from 'services/src';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'trends-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  imgPrefix = 'https://image.tmdb.org/t/p/w500';

  @Input() trendingMovies: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 5,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 9,
      },
    },
    nav: true,
  };

  constructor(private _MovesService: Services) {}
}
