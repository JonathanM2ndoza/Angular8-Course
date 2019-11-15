import { Component, Input } from '@angular/core';
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
  @Input() tab2 = true;
  
  constructor(public wishesService: WishesService,
              private router: Router) {
    this.list = this.wishesService.list;
  }

  showList(list: List) {
    if(this.tab2) {
      this.router.navigateByUrl(`/tabs/tab2/add-list/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add-list/${list.id}`);
    }
  }

  deleteList(listId: number) {
    this.wishesService.deleteList(listId);
    this.wishesService.saveStorage();
  }

}
