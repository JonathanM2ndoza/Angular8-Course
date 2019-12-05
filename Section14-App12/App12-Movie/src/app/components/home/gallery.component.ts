import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  @Input('billboard') billboard: Array<any>;
  @Input('title') title: string;

  constructor() {

  }

  ngOnInit() {
  }

}
