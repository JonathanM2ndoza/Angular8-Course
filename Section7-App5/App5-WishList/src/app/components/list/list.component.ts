import { Component, Input, ViewChild } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  list: List[] = [];
  @Input() tab2 = true;
  @ViewChild(IonList, null) ionList: IonList;
  
  constructor(public wishesService: WishesService,
              private router: Router,
              public alertController: AlertController) {
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

  async updateList(list1: List) {
  
    const alert = await this.alertController.create({
      header: 'Actualizar lista',
      inputs: [
        {
          name: 'tittle',
          type: 'text',
          value: list1.title,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.ionList.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
          console.log(data);
          if ( data.tittle.length === 0 ) {
            return;
          }
          this.wishesService.updateList(list1.id, data.tittle);
          this.wishesService.saveStorage();
          this.ionList.closeSlidingItems();
          }
        }
      ]
    });

   alert.present();

  }
}
