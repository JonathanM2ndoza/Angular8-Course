import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  onLogin(loginForm: NgForm) {

    if (loginForm.invalid) { return; }
    console.log(this.user);
    console.log(loginForm);

  }

}
