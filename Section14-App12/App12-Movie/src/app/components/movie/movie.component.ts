import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  movie: any;
  prevPage: string;
  searchText: string

  constructor(public movieService: MovieService,
              public activatedRoute: ActivatedRoute) {

              this.activatedRoute.params.subscribe(params => {
                console.log(params);
                this.prevPage = params['page'];

                if (params['searchText']) {
                  this.searchText = params['searchText'];
                }

                this.movieService.getMovieById(params['id'])
                                 .subscribe(resp => this.movie = resp);
                });
  }

  ngOnInit() {
  }

}
