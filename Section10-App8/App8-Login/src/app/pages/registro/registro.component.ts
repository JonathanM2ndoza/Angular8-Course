import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.user.email = 'jmtizure@gmail.com';
  }

  onSubmit() {
    console.log('onSubmit');
    console.log(this.user);

  }
}
