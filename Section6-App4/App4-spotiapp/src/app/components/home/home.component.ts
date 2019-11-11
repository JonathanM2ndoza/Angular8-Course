import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe( (resp: any) => {
      console.log(resp);
      this.newSongs = resp;
      this.loading = false;
    });
  }

  ngOnInit() {}
}
