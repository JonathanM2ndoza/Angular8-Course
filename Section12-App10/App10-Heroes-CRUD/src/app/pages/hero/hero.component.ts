import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: HeroModel = new HeroModel();
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  createHero(form: NgForm) {
    if (form.invalid) {
      console.log('Form no valid');
      return;
    }
    this.heroesService.createHero(this.hero).subscribe( resp => {
      console.log(resp);
    });
  }

}
