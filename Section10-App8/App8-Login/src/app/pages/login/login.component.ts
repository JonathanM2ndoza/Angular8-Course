import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onLogin(loginForm: NgForm) {

    if (loginForm.invalid) { return; }

    Swal.fire({
      title: 'Message',
      text: 'Please wait',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.authService.login(this.user)
        .subscribe( resp => {
          console.log(resp);
          Swal.close();
          this.router.navigateByUrl('/home');
        }, (err) => {
          Swal.fire({
            title: 'Message',
            text: err.error.error.message,
            icon: 'error'
          });
        });
  }

}
