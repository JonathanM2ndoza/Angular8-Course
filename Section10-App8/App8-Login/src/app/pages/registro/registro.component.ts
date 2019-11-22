import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: User;
  remember = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onRegister(registForm: NgForm) {
    if (registForm.invalid) { return; }

    Swal.fire({
      title: 'Message',
      text: 'Please wait',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.authService.signUp(this.user)
        .subscribe( resp => {
          console.log(resp);
          Swal.close();
          if (this.remember) {
            localStorage.setItem('email', this.user.email);
          }
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
