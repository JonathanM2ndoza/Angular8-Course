import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroModel } from '../../models/hero.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];
  loading = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.loading = true;
    this.heroesService.getHeroes()
        .subscribe( resp => {
          this.heroes = resp;
          this.loading = false;
        });
  }

  deleteHero(hero: HeroModel, i: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${hero.name}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this.heroesService.deleteHero(hero.id).subscribe();
      }
    });
  }

}
