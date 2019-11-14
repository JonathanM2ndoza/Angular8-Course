import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  list: List[] = [];

  constructor() {
    const list1 = new List('Recolectar piedas del infinito');
    const list2 = new List('Buscar heroes');
    this.list.push(list1, list2);
  }
  
  createList(tittle: string) {
    const newList = new List(tittle);
    this.list.push(newList);
  }  

}
