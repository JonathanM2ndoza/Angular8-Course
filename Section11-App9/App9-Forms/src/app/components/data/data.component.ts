import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
    //hobby: ['English', 'Read']
  };

  constructor() {
    this.form = new FormGroup({

      fullName: new FormGroup({
        name: new FormControl(/*this.user['fullName'].name*/'', [
          Validators.required,
          Validators.minLength(3)
       ]),
        surname: new FormControl(/*this.user['fullName'].surname*/'', [Validators.required, this.validateSurname])
      }),
      email: new FormControl(/*this.user['email']*/'', [
                                    Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                  ]),
      hobby: new FormArray([
        new FormControl('English', Validators.required)
      ])
    });
    // this.form.setValue(this.user);
  }

  save() {
    console.log(this.form.value);
    console.log(this.form);
   /*this.form.reset({
      fullName: {
        name: '',
        surname: ''
      },
      email: ''
    });*/
    // this.form.controls['email'].setValue('');
  }

  saveHobby() {
    (<FormArray>this.form.controls['hobby']).push(
      new FormControl('', Validators.required)
    );
  }

  validateSurname(formControl: FormControl): {[s: string]: boolean} {
    if (formControl.value === 'Mendoza') {
      return {
        validateName: true
      };
    }
    return null;
  }
}

