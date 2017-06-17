import { MyRouterModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
