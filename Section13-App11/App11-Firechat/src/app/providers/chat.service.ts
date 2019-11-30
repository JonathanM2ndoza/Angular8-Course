import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];

  constructor(private angularFirestore: AngularFirestore) {

  }

  loadMessages() {
    this.itemsCollection = this.angularFirestore.collection<any>('chats');
    return this.itemsCollection.valueChanges();
  }
}
