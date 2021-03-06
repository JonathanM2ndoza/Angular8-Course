import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://app-crud-6478a.firebaseio.com';

  constructor(private httpClient: HttpClient) { }

  createHero(hero: HeroModel) {
    return this.httpClient.post(`${ this.url }/heroes.json`, hero)
               .pipe(
                 map( (resp: any) => {
                  hero.id = resp.name;
                  return hero;
                 })
               );
  }

  updateHero(hero: HeroModel) {
    const heroTemp = {
      ...hero
    };
    delete heroTemp.id;
    return this.httpClient.put(`${ this.url }/heroes/${hero.id}.json`, heroTemp);
  }

  getHeroes() {
    return this.httpClient.get(`${ this.url }/heroes.json`)
                .pipe(
                  map( resp => this.createArrayHeroes(resp)), delay(500)
                );
  }

  getHero(id: string) {
    return this.httpClient.get(`${this.url}/heroes/${id}.json`);
  }

  deleteHero(id: string) {
    return this.httpClient.delete(`${this.url}/heroes/${id}.json`);
  }

  private createArrayHeroes(arrayFirebase: Object) {
    const heroes: HeroModel[] = [];
    console.log(arrayFirebase);

    if (arrayFirebase === null) { return []; }

    Object.keys(arrayFirebase).forEach( key => {
      const hero: HeroModel = arrayFirebase[key];
      hero.id = key;
      heroes.push(hero);
    }
    );

    return heroes;
  }
}
