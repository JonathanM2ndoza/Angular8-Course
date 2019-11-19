import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      console.log('Ruta padre UserComponent');
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
