import { Component } from '@angular/core';
import { Services } from 'services/src';

@Component({
  selector: 'trends-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.scss'],
})
export class TvsComponent {
  trendingTv: any[] = [];
  tvId = '';
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  constructor(private _TvService: Services) {}

  ngOnInit(): void {
    this._TvService.getTrending('tv').subscribe((data) => {
      this.trendingTv = data.results.slice(0 - 22);
    });
  }
}
