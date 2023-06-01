import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './component/home/home.component';
import { MoviesComponent } from './component/movies/movies/movies.component';
import { MoviedetilsComponent } from './component/movies/moviedetils/moviedetils.component';
import { NavbarComponent } from './component/static/navbar/navbar.component';
import { PersonsDetailsComponent } from './component/persons/persons-details/persons-details.component';
import { PersonsComponent } from './component/persons/persons/persons.component';
import { SearchComponent } from './component/static/search/search.component';
import { TvsComponent } from './component/tvs/tvs/tvs.component';
import { TvDetailsComponent } from './component/tvs/tv-details/tv-details.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from './component/home-header/home-header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tv', component: TvsComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'movie', component: MoviesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'moviedetils/:movieId', component: MoviedetilsComponent },
  { path: 'tvDetail/:tvId', component: TvDetailsComponent },
  { path: 'person/:personId', component: PersonsDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    MoviesComponent,
    MoviedetilsComponent,
    NavbarComponent,
    PersonsDetailsComponent,
    PersonsComponent,
    SearchComponent,
    TvsComponent,
    TvDetailsComponent,
    HomeHeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent,
    MoviesComponent,
    MoviedetilsComponent,
    NavbarComponent,
    PersonsDetailsComponent,
    PersonsComponent,
    SearchComponent,
    TvsComponent,
    TvDetailsComponent,
    HomeHeaderComponent,
  ],
})
export class AppModule {}
