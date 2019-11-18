import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassComponent } from './components/class/class.component';
import { RemarkDirective } from './directives/remark.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassComponent,
    RemarkDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
