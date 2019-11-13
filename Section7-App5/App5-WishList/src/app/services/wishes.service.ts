import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  list: List[] = [];

  constructor() {
    console.log('WishesService Ready! ');
  }
}
