import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from 'services/src';

@Component({
  selector: 'trends-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  trendingPersons: any[] = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MovesService: Services) {}

  ngOnInit(): void {
    this._MovesService.getTrending('person').subscribe((data) => {
      this.trendingPersons = data.results.slice(0 - 25);
    });
  }
}
