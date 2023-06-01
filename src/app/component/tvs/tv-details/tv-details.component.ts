import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from 'services/src';

@Component({
  selector: 'trends-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss'],
})
export class TvDetailsComponent {
  tvId = '';
  tvDetail: any;
  getMovieVideoResult: any;
  getTvCastResult: any;

  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _TvService: Services
  ) {
    this.tvId = _ActivatedRoute.snapshot.params.tvId;
    this._TvService.getTv(this.tvId).subscribe((data) => {
      this.tvDetail = data;
    });
  }

  getVideo(id: any) {
    this._TvService.getTvVideo(this.tvId)?.subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getTvCast(id: any) {
    this._TvService.getTvCast(this.tvId).subscribe((result) => {
      this.getTvCastResult = result.cast.slice(0, 10);
    });
  }

  ngOnInit(): void {
    const getParamId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getVideo(getParamId);
    this.getTvCast(getParamId);
  }
}
