import { Component } from '@angular/core';
import { Services } from 'services/src';

@Component({
  selector: 'trends-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  trendingMovies: any[] = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MovesService: Services) {}

  ngOnInit(): void {
    this._MovesService.getTrending('movie').subscribe((data) => {
      this.trendingMovies = data.results.slice(0 - 25);
    });
  }
}
