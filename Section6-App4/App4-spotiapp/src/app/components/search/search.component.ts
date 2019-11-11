import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
  }

  searchArtist(keyArtist: string){
    console.log(keyArtist);
    this.spotifyService.getArtist(keyArtist)
    .subscribe( (resp: any) => {
      console.log(resp);
      this.artists = resp;
    });
  }

}
