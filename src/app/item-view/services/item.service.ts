import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items: Item[] = [{
    id: uuid(),
    name: 'AHOOK',
    price: 5,
    qty: 10
  },{
    id: uuid(),
    name: 'BANDAIDS',
    price: 12,
    qty: 10
  },{
    id: uuid(),
    name: 'BEEF',
    price: 50,
    qty: 10
  }];


  addItem( item: Item ):void {

    const newItem: Item = { id: uuid(), 
      name:item.name.toUpperCase(),
      price:item.price,
      qty:item.qty
    };

    this.items.push(newItem);
  }

  deleteItemById( id:string ):void {
    this.items = this.items.filter( items => items.id !== id );
  }

  getItemInfoById(id: string): Item | undefined {
    return this.items.find(item => item.id === id);
  }
}
