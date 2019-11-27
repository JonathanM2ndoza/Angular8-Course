import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

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
      ]),
      username: new FormControl('', Validators.required, this.validateUsername),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()
    });
    // this.form.setValue(this.user);

    this.form.controls['password2'].setValidators([
      Validators.required,
      this.validatePassword
    ]);
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
    if (formControl.value === 'Mendoza1') {
      return {
        validateName: true
      };
    }
    return null;
  }

  validatePassword = (formControl: FormControl): {[s: string]: boolean}  => {
    if (formControl.value !== this.form.controls['password1'].value) {
      return {
        validatePassword: true
      };
    }
    return null;
  }

  validateUsername(formControl: FormControl): Promise<any>|Observable<any> {

    let promise1 = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          if (formControl.value === 'jmendoza') {
            resolve({validate: true});
          } else {
            resolve(null);
          }
        }, 3000);
      });

    return promise1;
  }

}

