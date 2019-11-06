import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from 'src/app/services/heroes/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroesService: HeroesService, 
              private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  showHeroe(id: number){
    console.log("HeroesComponent " + id);
    this.router.navigate(['/heroe', id]);
  }

}
