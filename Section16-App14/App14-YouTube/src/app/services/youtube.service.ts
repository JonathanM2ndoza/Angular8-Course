import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey: string = 'AIzaSyDVxucOE6rHagzRFFj_rQmk3LU4wPODAG8';
  private urlApi: string = 'https://www.googleapis.com/youtube/v3';
  private playlistId: string = 'UUHsEvPl2I3Dk7LbUvzlDYug';
  private nextPageToken: string = '';

  constructor(public httpClient: HttpClient) { }

  getVideos() {
    const url = `${this.urlApi}/playlistItems`;
    const httpParams = new HttpParams()
        .set('part', 'snippet')
        .set('maxResults', '9')
        .set('playlistId', this.playlistId)
        .set('key', this.apiKey)
        .set('pageToken', this.nextPageToken);

    return this.httpClient.get(url, { params: httpParams})
                          .pipe(
                            map((resp: any)  => {
                              console.log(resp);
                              this.nextPageToken = resp.nextPageToken;

                              let videos: any[] = [];
                              for (let video of resp.items) {
                                const snippet = video.snippet;
                                videos.push(snippet);
                              }

                              return videos;
                              }
                            )
                          );
  }
}
