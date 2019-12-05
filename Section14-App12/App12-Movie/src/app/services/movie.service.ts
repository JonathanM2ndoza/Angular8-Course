import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey: string = '875e616ad3c852344530e557e9861de5';
  private urlApi: string = 'https://api.themoviedb.org/3';
  private urlCall: string = '&language=es&callback=JSONP_CALLBACK';
  movies: any;

  constructor(private http: HttpClient) { }

  getPopularMovie() {
    let url = `${this.urlApi}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.jsonp(url.concat(this.urlCall), 'JSONP_CALLBACK');
  }

  getMovie(text: string ) {
    let url = `${this.urlApi}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.jsonp(url.concat(this.urlCall), 'JSONP_CALLBACK');
  }

  getBillboard() {
    let dateFrom = new Date();
    let dateUp = new Date();

    dateUp.setDate(dateUp.getDate() + 7);

    let dateFromStr = `${dateFrom.getFullYear()}-${dateFrom.getMonth() + 1}-${dateFrom.getDate() < 10 ? '' + 0 + dateFrom.getDate():dateFrom.getDate()}`;
    let dateUpStr = `${dateUp.getFullYear()}-${dateUp.getMonth() + 1}-${dateUp.getDate()}`;

    let url = `${this.urlApi}/discover/movie?primary_release_date.gte=${dateFromStr}&primary_release_date.lte=${dateUpStr}&api_key=${this.apiKey}`;

    return this.http.jsonp(url.concat(this.urlCall), 'JSONP_CALLBACK');
  }

  getPopularKidsMovies() {
    let url = `${this.urlApi}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.jsonp(url.concat(this.urlCall), 'JSONP_CALLBACK');
  }

}
