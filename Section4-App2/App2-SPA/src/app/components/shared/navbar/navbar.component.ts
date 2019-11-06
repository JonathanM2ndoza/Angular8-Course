import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getHero(event: any , name: string){
    console.log(name);
    event.preventDefault();
    this.router.navigate(['/search', name]);
  }

}
