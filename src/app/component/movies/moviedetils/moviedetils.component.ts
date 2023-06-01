import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from 'services/src';

@Component({
  selector: 'trends-moviedetils',
  templateUrl: './moviedetils.component.html',
  styleUrls: ['./moviedetils.component.scss']
})
export class MoviedetilsComponent implements OnInit {
  getMovieVideoResult:any;
  movieId = '';
  getMovieCastResult:any;
  movieDetail: any;
  imgPrefix='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MovesService: Services) {
    this.movieId = _ActivatedRoute.snapshot.params.movieId;
    this._MovesService.getMovieDetails(this.movieId).subscribe((data) => {

      this.movieDetail = data;
      
    })

    
  }

    getVideo(id:any)
  {
    this._MovesService.getMovieVideo(this.movieId).subscribe((result)=>{
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

 getMovieCast(id:any)
  {
    this._MovesService.getMovieCast(this.movieId).subscribe((result)=>{
      this.getMovieCastResult = (result.cast).slice(0,9);
    });
   
  }


  ngOnInit(): void {
    const getParamId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }


}
