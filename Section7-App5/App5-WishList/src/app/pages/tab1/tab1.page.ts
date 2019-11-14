import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list: List[] = [];

  constructor(public wishesService: WishesService,
              private router: Router,
              public alertController: AlertController) {
    this.list = this.wishesService.list;
  }

  async addList() {

      const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'tittle',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
          console.log(data);
          if ( data.tittle.length === 0 ) {
            return;
          }
          const listId = this.wishesService.createList(data.tittle);
          this.router.navigateByUrl(`/tabs/tab1/add-list/${listId}`);
          }
        }
      ]
    });

   alert.present();
  }
}
