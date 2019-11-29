import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroModel } from '../../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes()
        .subscribe( resp => this.heroes = resp);
  }

}
