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

  deleteList(listId: number) {
    const index = this.list.findIndex(listData => listData.id === listId);
    this.list.splice(index, 1);
  }

  updateList(listId: number, nameList: string) {
    const list =  this.getList(listId);
    list.title = nameList;
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
