import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];

  constructor( private spotifyService: SpotifyService) { 
    this.spotifyService.getNewReleases().subscribe( (resp: any) => {
      console.log(resp);
      this.newSongs = resp;
    });
  }

  ngOnInit() {}
}
