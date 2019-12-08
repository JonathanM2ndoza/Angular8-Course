import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any[] = [];
  videoSelect: any;

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.getVideos()
                       .subscribe(resp => {
                         this.videos = resp;
                         console.log(this.videos);
                        });
  }

  ngOnInit() {
  }

  getVideo(video: any) {
    this.videoSelect = video;
    $('#myModal').modal({backdrop: 'static', keyboard: false});
  }

  closeModal() {
    this.videoSelect = null;
    $('#myModal').modal('hide');
  }

}
