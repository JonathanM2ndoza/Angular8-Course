import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list: List[] = [];

  constructor(public wishesService: WishesService,
              private router: Router) {
    this.list = this.wishesService.list;
  }

  addList() {
    this.router.navigateByUrl('/tabs/tab1/add-list');
  }
}
