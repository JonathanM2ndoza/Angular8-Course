import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = new User();
  }

  onRegister(registForm: NgForm) {
    if (registForm.invalid) { return; }
    this.authService.signUp(this.user)
        .subscribe( resp => {
          console.log(resp);
        }, (err) => {
          console.log(err.error.error.message);
        });
  }
}
