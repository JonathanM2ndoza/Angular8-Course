import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../interface/message.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];

  constructor(private angularFirestore: AngularFirestore) {

  }

  loadMessages() {
    this.itemsCollection = this.angularFirestore.collection<Message>('chats');
    return this.itemsCollection.valueChanges()
                               .pipe( map( (message: Message[]) => {
                                      console.log(message);
                                      this.chats = message;
                                      })
                                   );
  }

  createMessage(text: string) {
    let message: Message = {
      name: 'Demo',
      message: text,
      date: new Date().getTime()
    };

    return this.itemsCollection.add(message);
  }
}
