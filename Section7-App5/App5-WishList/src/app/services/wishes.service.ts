import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  list: List[] = [];

  constructor() {
    this.loadStorage();
  }

  createList(tittle: string) {
    const newList = new List(tittle);
    this.list.push(newList);
    this.saveStorage();
    return newList.id;
  }

  getList(listId: string | number) {
    listId = Number(listId);
    return this.list.find( listData => listData.id === listId);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  loadStorage() {
    if (localStorage.getItem('data')) {
      this.list = JSON.parse(localStorage.getItem('data'));
    }
  }
}
