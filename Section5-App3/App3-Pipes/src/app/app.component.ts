import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App3-Pipes';
  name = 'Jonathan';
  name2 = 'jonaTHan saLomOn MenDoZa';

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  num = 0.234;
  salary = 1234.5;

  pet = {
    name: 'Amber',
    age: '3',
    certificate: true,
    address: 'Tahona'
  };

   promise1 = new Promise( (resolve, reject ) => {
      setTimeout( () => resolve('Data Ready!'), 3500 );
    });

    date1 = new Date();
    video1 = 'WMg0Zgw-RdM';
    activar: boolean = true;
}
