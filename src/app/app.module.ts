import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { ItemViewModule } from './item-view/item-view.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ItemViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
