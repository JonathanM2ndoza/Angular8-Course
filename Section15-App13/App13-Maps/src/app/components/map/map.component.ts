import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 10.442130;
  lng: number = 66.848569;

  constructor() { }

  ngOnInit() {
  }

}
