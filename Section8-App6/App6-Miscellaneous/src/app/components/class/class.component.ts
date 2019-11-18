import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {

  alert1:string = 'alert-danger';
  loading:boolean = false;
  properties:Object = {
    danger: false
  };
  
  constructor() { }

  ngOnInit() {
  }

  execute(){
    this.loading = true;
    setTimeout( () => this.loading = false, 3000);
  }
  
}
