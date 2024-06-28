import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'item-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  @Output()
  public onNewItem: EventEmitter<Item> = new EventEmitter();

  public item: Item = {
    name: '',
    price: 0,
    qty: 0
  };

  emitItem(): void {
    if (this.item.name.length === 0) {
      alert("Item Name is required");
    } else if (this.item.price === 0 || this.item.price === null) {
      alert("Unitary Price is required");
    } else if (this.item.qty === 0 || this.item.qty === null) {
      alert("Item quantity is required");
    } else {
      this.onNewItem.emit(this.item);
      this.item = { name: '', price: 0, qty: 0 };
    }
  }
}
