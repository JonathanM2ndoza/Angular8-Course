import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieArrayPipe } from '../../pipes/movie-array.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ MovieArrayPipe ]
})
export class HomeComponent implements OnInit {

  billboard: Array<any>;
  popularMovie: Array<any>;
  popularKidsMovies: Array<any>;

  constructor(public movieService: MovieService,
              private movieArrayPipe: MovieArrayPipe  ) {

    this.movieService.getBillboard().subscribe(resp => this.billboard = this.movieArrayPipe.transform(resp));

    this.movieService.getPopularMovie().subscribe(resp => this.popularMovie = this.movieArrayPipe.transform(resp));

    this.movieService.getPopularKidsMovies().subscribe(resp => this.popularKidsMovies = this.movieArrayPipe.transform(resp));
  }

  ngOnInit() {
  }

}
