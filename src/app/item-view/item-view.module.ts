import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemPageComponent } from './pages/item-page.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AddItemComponent,
    ListComponent,
    ItemPageComponent
  ],
  exports: [
    ItemPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ItemViewModule { }
