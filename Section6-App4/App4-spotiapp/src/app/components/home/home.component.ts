import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private spotifyService: SpotifyService) {
      this.loading = true;
      this.error = false;

      this.spotifyService.getNewReleases().subscribe( (resp: any) => {
      console.log(resp);
      this.newSongs = resp;
      this.loading = false;
    }, (errorResp) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = errorResp.error.error.message;
    });
  }

  ngOnInit() {}
}
