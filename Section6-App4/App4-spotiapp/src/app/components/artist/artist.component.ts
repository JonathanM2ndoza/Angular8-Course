import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;
  
  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
    this.getArtist(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtist( artistId: string) {
    this.spotifyService.getArtist(artistId)
    .subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

}
