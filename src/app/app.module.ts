import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { EmpChildComponent } from './emp-child/emp-child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    EmpChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
