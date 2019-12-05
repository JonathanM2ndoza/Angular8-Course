import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieArrayPipe } from '../../pipes/movie-array.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
  providers: [ MovieArrayPipe ]
})
export class SearchComponent implements OnInit {

  search: string = '';
  searchMovies: Array<any>;

  constructor(public movieService: MovieService,
              private movieArrayPipe: MovieArrayPipe) { }

  ngOnInit() {
  }

  getMovie() {
    if (this.search.length === 0) {
      return;
    }
    this.movieService.getMovie(this.search).subscribe(resp => {this.searchMovies = this.movieArrayPipe.transform(resp);  console.log(this.searchMovies) });
   
    
  }

}
