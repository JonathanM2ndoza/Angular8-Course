import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero.model';
import { map } from 'rxjs/operators';

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
}
