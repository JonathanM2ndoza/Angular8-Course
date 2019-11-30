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
        .subscribe ( (messages: any[]) => {
          console.log(messages);
        });
  }

  sendMessage() {
    console.log(this.message);
  }
}
