import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getHero(event: any , text: string){
    console.log(text);
    event.preventDefault();
  }

}
