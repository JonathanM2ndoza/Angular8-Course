import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
  }

  getArtists(keyArtist: string){
    console.log(keyArtist);
    this.loading = true;
    this.spotifyService.getArtists(keyArtist)
    .subscribe( (resp: any) => {
      console.log(resp);
      this.artists = resp;
      this.loading = false;
    });
  }
}
