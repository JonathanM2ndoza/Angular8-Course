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
  topTracks: any[] = []; 

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
    this.getArtist(params['id']);
    this.getTopTracks(params['id']);
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

  getTopTracks(artistId: string) {
    this.spotifyService.getTopTracks(artistId)
        .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
        });
  }

}
