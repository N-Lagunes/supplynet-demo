import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item.interface';


@Component({
  selector: 'item-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public itemList: Item[] = [{
    name: 'Trunks',
    price: 10,
    qty: 10
  }];

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteItem( id?: string ):void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }

}
