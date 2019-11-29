import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: HeroModel = new HeroModel();
  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    if (form.invalid) {
      console.log('Form no valid');
      return;
    }
    console.log(form);
    console.log(this.hero);
  }

}
