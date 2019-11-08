import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, all: boolean, ...args: any[]): string {

        console.log(value);
        console.log(args);
        value = value.toLocaleLowerCase();
        let names = value.split(' ');

        if(all){
            for(let i in names){
                names[i] = names[i][0].toLocaleUpperCase() + names[i].substr(1);
            }
        }else{
            names[0] = names[0][0].toLocaleUpperCase() + names[0].substr(1);
        }
        
        return names.join(' ');
    }
}
