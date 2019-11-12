import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private httpClient: HttpClient ) {
    console.log('SpotifyService Ready!');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAJxUIB7t2TvdakEIH7x6XWI3lFbVFV_0AMZj8S9PTDY6AKy-87IEIxU5RZr_G3kxXKA2kbWYEg8ClNuEU'
    });
    return this.httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( resp => resp['albums'].items));
  }

  getArtists(keyArtist: string) {
    return this.getQuery(`search?q=${keyArtist}&type=artist&limit=15`)
               .pipe( map( resp => resp['artists'].items));
  }

  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`)
                .pipe( map( resp => resp['tracks']));
  }

}
