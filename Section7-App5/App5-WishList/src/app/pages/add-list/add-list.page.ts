import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  list: List;
  nameItem = '';

  constructor(private wishesService: WishesService,
              private activatedRoute: ActivatedRoute) {

   const listId = this.activatedRoute.snapshot.paramMap.get('listId');
   this.list = this.wishesService.getList(listId);
  }

  ngOnInit() {
  }

  addItem() {
    if (this.nameItem.length === 0 ) { return; }

    const newItem = new Item(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = '';
    this.wishesService.saveStorage();
  }

}
