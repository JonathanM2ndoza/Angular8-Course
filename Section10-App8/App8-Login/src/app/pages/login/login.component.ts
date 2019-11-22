import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = new User();
  }

  onLogin(loginForm: NgForm) {

    if (loginForm.invalid) { return; }
  
    this.authService.login(this.user)
        .subscribe( resp => {
          console.log(resp);
        }, (err) => {
          console.log(err.error.error.message);
        });
  }

}
