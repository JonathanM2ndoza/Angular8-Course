import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {

  alert1:string = 'alert-danger';
  properties:Object = {
    danger: false
  };
  
  constructor() { }

  ngOnInit() {
  }

}
