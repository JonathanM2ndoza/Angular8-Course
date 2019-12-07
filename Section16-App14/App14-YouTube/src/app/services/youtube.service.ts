import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey: string = 'AIzaSyDVxucOE6rHagzRFFj_rQmk3LU4wPODAG8';
  private urlApi: string = 'https://www.googleapis.com/youtube/v3';
  private playlistId: string = 'UUAAkvW6JrQpVj-9Gh4Y9z-A';

  constructor(public httpClient: HttpClient) { }

  getVideos() {
    const url = `${this.urlApi}/playlistItems`;
    const httpParams = new HttpParams()
        .set('part', 'snippet')
        .set('maxResults', '3')
        .set('playlistId', this.playlistId)
        .set('key', this.apiKey);

    return this.httpClient.get(url, { params: httpParams});
  }
}
