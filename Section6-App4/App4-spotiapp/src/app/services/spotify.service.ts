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
      'Authorization': 'Bearer BQCktcHy5AMebqV1SYcoCJXcIEoypIXlx027JzTv3IIb-KsYzJWLwmh_0P0RHqVBdafj235teGKiG5EpqkE'
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
