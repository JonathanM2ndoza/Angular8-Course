import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey: string = '875e616ad3c852344530e557e9861de5';
  private urlApi: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularMovie() {
    let url = `${this.urlApi}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
}
