import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Services } from 'services/src';

@Component({
  selector: 'trends-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  searchResult: any;

  constructor(private _AuthService: Services, private search: Services,private title:Title,private meta:Meta) {
     this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   
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
