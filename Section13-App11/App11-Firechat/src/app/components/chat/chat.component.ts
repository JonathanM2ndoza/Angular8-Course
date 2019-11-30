import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  message: string = '';

  constructor(public chatService: ChatService) {
    this.chatService.loadMessages()
        .subscribe();
  }

  sendMessage() {
    console.log(this.message);
    if (this.message.length === 0) {
      return;
    }
    this.chatService.createMessage(this.message)
      .then( () => this.message = '')
      .catch( (err) => console.log('Error sent', err));
  }
}
