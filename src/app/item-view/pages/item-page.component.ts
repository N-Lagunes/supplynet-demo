import { Component } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { ItemService } from '../services/item.service';
import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html'
})
export class ItemPageComponent {
  public currentDate: string | undefined;
  public currentHr: string | undefined;

  constructor(private itemService: ItemService) {
    this.updateDateTime();
  }

  get items(): Item[] {
    return [...this.itemService.items];
  }

  updateDateTime(): void {
    const date = new Date();
    this.currentHr = date.getHours().toString().padStart(2, '0') + ':' +
                     date.getMinutes().toString().padStart(2, '0') + ':' +
                     date.getSeconds().toString().padStart(2, '0');
    this.currentDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
                       date.getDate().toString().padStart(2, '0') + '/' +
                       date.getFullYear().toString();
  }

  onDeleteItem(id: string): void {
    const itmToDelete = this.itemService.getItemInfoById(id);
    
    if (!itmToDelete) {
      Swal.fire({
        title: 'Item not found',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: 'You are about to delete the next item:',
      text: `${itmToDelete.name} / ${itmToDelete.qty} / ${itmToDelete.price * itmToDelete.qty}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this.itemService.deleteItemById(id);
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        );
      } else {
        Swal.fire(
          'Cancelled',
          'Your item is safe.',
          'error'
        );
      }
    });
  }

  onNewItem(item: Item): void {
    this.itemService.addItem(item);
    Swal.fire({
      title: 'Item added successfully!',
      icon: 'success',
    });
  }

  getItemInfo(id: string): void {
    const item = this.itemService.getItemInfoById(id);
    if (item) {
      Swal.fire({
        title: `Item Info: ${item.name}`,
        text: `Price: ${item.price}, Quantity: ${item.qty}`,
        icon: 'info',
      });
    } else {
      Swal.fire({
        title: 'Item not found',
        icon: 'error',
      });
    }
  }
}
