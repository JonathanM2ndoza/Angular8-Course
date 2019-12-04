import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public movieService: MovieService){
    /*this.movieService.getPopularMovie()
                     .subscribe( data => console.log(data)
                     );*/
  }
}
