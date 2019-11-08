import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if (activar) {
      let result: string = '';
       for ( const iterator of value) {
         result +=  '*';
       }
      return result;
    } else {
      return value;
    }
  }

}
