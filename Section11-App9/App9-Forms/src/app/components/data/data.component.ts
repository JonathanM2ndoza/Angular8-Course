import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  form: FormGroup;

  user: Object = {
    fullName: {
      name: 'Angelica',
      surname: 'Mendoza'
    },
    email: 'am@gmail.com'
  };

  constructor() {
    this.form = new FormGroup({

      fullName: new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
       ]),
        surname: new FormControl('', Validators.required)
      }),
      email: new FormControl('', [
                                    Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                  ])
    });
  }

  save() {
    console.log(this.form.value);
    console.log(this.form);
  }

}
