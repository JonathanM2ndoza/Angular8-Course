import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent  {

  @Input() error: boolean;
  @Input() errorMessage: boolean;

  constructor() { }


}
