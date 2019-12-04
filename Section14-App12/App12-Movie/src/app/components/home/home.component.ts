import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public movieService: MovieService) { 
    this.movieService.getBillboard().subscribe(resp => {
      console.log(resp);
    });
  }

  ngOnInit() {
  }

}
