import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieArray'
})
export class MovieArrayPipe implements PipeTransform {

  transform(value: any): Array<any> {
    if (value) {
      return value.results;
    } else {
      return [];
    }
  }

}
