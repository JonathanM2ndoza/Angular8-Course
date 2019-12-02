import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../interface/message.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  public userFirebase: any = {};

  constructor(private angularFirestore: AngularFirestore,
              public angularFireAuth: AngularFireAuth) {

              this.angularFireAuth.authState.subscribe( user => {
              console.log('Estado del usuario: ', user);
              if (!user) { return; }
              this.userFirebase.name = user.displayName;
              this.userFirebase.uid = user.uid;

              });
  }

  login(provider: string) {
    if ( provider === 'Google'){
      this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else {
      // TODO: No run because Developer account is pending on Twitter.
      this.angularFireAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }
  logout() {
    this.userFirebase = {};
    this.angularFireAuth.auth.signOut();
  }

  loadMessages() {
    this.itemsCollection = this.angularFirestore.collection<Message>('chats', ref => ref.orderBy('date', 'desc')
                                                                                        .limit(5) );
    return this.itemsCollection.valueChanges()
                               .pipe( map( (message: Message[]) => {
                                      console.log(message);
                                      this.chats = [];
                                      for (const m of message) {
                                        this.chats.unshift(m);
                                      }
                                      return this.chats;
                                      })
                                   );
  }

  createMessage(text: string) {
    let message: Message = {
      name: this.userFirebase.name,
      message: text,
      date: new Date().getTime(),
      uid: this.userFirebase.uid
    };

    return this.itemsCollection.add(message);
  }
}
