import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    show = true;
    sentence: any = {
        message: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target.',
        author: 'Angular'
    };
    pets: string[] = ['Amber', 'Noche', 'Dia'];
}
