import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <hr>
  <app-ng-style></app-ng-style>
  
  <hr>
  <app-css></app-css>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
 
  <hr>
  <app-class></app-class>

  <hr>
  <p [appRemark]="'orange'">
    Hello Custom Directives
  </p>

  <hr>
  <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
