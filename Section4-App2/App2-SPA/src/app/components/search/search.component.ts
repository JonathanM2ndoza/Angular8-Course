import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  name: string;
  heroes: Hero[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.name = params['name'];
      this.heroes = this.heroesService.getHeroesByName(params['name']);
    });
  }

  showHeroe(id: number){
    this.router.navigate(['/heroe', id]);
  }
}
