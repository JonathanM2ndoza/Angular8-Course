import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

import Swal from 'sweetalert2';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: HeroModel = new HeroModel();
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.heroesService.getHero(id)
          .subscribe( (resp: HeroModel) => {
            console.log(resp);
            this.hero = resp;
            this.hero.id = id;
          });
    }
  }

  createHero(form: NgForm) {
    if (form.invalid) {
      console.log('Form no valid');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let petition: Observable<any>;

    if (this.hero.id) {
      petition = this.heroesService.updateHero(this.hero);
    } else {
      petition = this.heroesService.createHero(this.hero);
    }
    petition.subscribe( resp => {
      Swal.fire({
        title: this.hero.name,
        text: 'Se actualizó exitosamente',
        icon: 'success'
      });
    });

  }
}
