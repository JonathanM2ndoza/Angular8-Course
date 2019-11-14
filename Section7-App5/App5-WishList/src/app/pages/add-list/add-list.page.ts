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

  checkboxChange(item: Item) {
    const pending = this.list.items
                        .filter( itemData => !itemData.done)
                        .length;
    if(pending === 0 ) {
      this.list.endDate = new Date();
      this.list.done = true;
    } else {
      this.list.endDate = null;
      this.list.done = false;
    }
    console.log(this.list);
    this.wishesService.saveStorage();
  }

  delete(id: number) {
    const index = this.list.items.findIndex(item => item.id === id);
    this.list.items.splice(index, 1);
    this.wishesService.saveStorage();
  }
}
