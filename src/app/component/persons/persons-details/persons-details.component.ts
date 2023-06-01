import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Services } from 'services/src';


@Component({
  selector: 'trends-persons-details',
  templateUrl: './persons-details.component.html',
  styleUrls: ['./persons-details.component.scss']
})
export class PersonsDetailsComponent {
  personId = '';
  personDetails: any;
   imgPrefix='https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute, private person: Services) { 
    this.personId=_ActivatedRoute.snapshot.params.personId
    this.person.getPersons(this.personId).subscribe(data => {
      this.personDetails=data
    })
  }
}
