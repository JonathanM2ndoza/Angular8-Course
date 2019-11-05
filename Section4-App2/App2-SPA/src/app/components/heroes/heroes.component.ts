import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroesService: HeroesService ) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

}
