import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  constructor() {

    this.form = new FormGroup({
      'name': new FormControl('Jonathan'),
      'surname': new FormControl(),
      'email': new FormControl()
    });
  }

  save() {
    console.log(this.form.value);
    console.log(this.form);
  }

}
