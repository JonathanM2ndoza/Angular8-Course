import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  list: List[] = [];
  
  constructor(public wishesService: WishesService,
              private router: Router) {
    this.list = this.wishesService.list;
  }

  showList(list: List) {
    this.router.navigateByUrl(`/tabs/tab1/add-list/${list.id}`);
  }

}
