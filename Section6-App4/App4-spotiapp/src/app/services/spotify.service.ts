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
      'Authorization': 'Bearer BQC1H5GaIfhpZvOKxy64MEu2ZK1agaurgd4hPbmOGKqt5TJxdnO9FP3a_4tB0xv56jih_-erhvXuBFy9f0w'
    });
    return this.httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( resp => resp['albums'].items));
  }

  getArtist(keyArtist: string) {
    return this.getQuery(`search?q=${keyArtist}&type=artist&limit=15`)
               .pipe( map( resp => resp['artists'].items));
  }
}
