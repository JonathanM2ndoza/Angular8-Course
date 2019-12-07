import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe(resp => console.log(resp));
  }

  ngOnInit() {
  }

}
