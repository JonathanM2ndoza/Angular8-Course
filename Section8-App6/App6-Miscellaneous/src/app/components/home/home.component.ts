import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
         AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <hr>
  <app-ng-style></app-ng-style>
  <br>
  
  <hr>
  <app-css></app-css>
  <br>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
 
  <hr>
  <app-class></app-class>
  <br>

  <hr>
  <p [appRemark]="'orange'">
    Hello Custom Directives
  </p>

  <hr>
  <br>
  <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
    
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  
}
