import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  heroe: Hero;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) { 
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
