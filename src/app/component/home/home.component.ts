import { Component, OnInit } from '@angular/core';
import { Services } from 'services/src';

@Component({
  selector: 'trends-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingpoepole: any[] = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MovesService: Services) {}
  ngOnInit(): void {
    this._MovesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results.slice(0 - 10);
    });
    this._MovesService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0 - 10);
    });

    this._MovesService.getTrending('person').subscribe((data) => {
      this.trendingpoepole = data.results.slice(0 - 10);
    });
  }
}
