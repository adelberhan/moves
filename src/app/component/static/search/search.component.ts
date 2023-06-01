import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Services } from 'services/src';

@Component({
  selector: 'trends-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchResult: any;

  constructor( private search: Services, private title: Title, private meta: Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({ name: 'description', content: 'search here movies like avatar,war etc' });
  }
 


    searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })
  
  submitForm() {
    this.search.getSearchMovie(this.searchForm.value).subscribe(result => {
      this.searchResult = result.results;
    })
  }
}
