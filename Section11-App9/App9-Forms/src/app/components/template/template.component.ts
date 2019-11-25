import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  user:Object = {
    name: 'Angelica',
    surname: 'Mendoza',
    email: 'am@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log('ngForm', form);
    console.log('value form', form.value);
    console.log('user', this.user);
  }

}
