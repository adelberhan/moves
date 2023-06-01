import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Services {
  baseurl = 'https://api.themoviedb.org/3';
  apiKey = '79f857e5d88f343aa0369fa4636243b7';

  constructor(private _HttpClient: HttpClient) {}


  getTrending(mediaType: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=79f857e5d88f343aa0369fa4636243b7&page=1`
    );
  }

    // get Movie Details
  getMovieDetails(data: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}/movie/${data}?api_key=${this.apiKey}`
    );
  }

  // Get tv show details
  getTv(tv_id: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=79f857e5d88f343aa0369fa4636243b7&language=en-US`
    );
  }



  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`
    );
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`
    );
  }

  getPersons(person_id: string): Observable<any> {
    return this._HttpClient.get(
      `https://api.themoviedb.org/3/person/${person_id}?api_key=79f857e5d88f343aa0369fa4636243b7&language=en-US`
    );
  }

  getSearchMovie(data: any): Observable<any> {

    return this._HttpClient.get(
      `${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`
    );
  }

  // getMovieCast
  getTvCast(data: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}/tv/${data}/credits?api_key=${this.apiKey}`
    );
  }

  // getMovieVideo
  getTvVideo(data: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}/tv/${data}/videos?api_key=${this.apiKey}`
    );
  }


  
}
