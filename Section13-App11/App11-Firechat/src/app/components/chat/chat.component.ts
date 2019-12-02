import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit{

  message: string = '';
  elem: any;

  constructor(public chatService: ChatService) {
    this.chatService.loadMessages()
        .subscribe(() => {
          setTimeout( () => {
            this.elem.scrollTop = this.elem.scrollHeight;
          }, 20);
        });
  }

  ngOnInit() {
    this.elem = document.getElementById('app-mensajes');
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
