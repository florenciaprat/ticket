import { Injectable } from '@angular/core';
import { Ticket } from './ticket-list/Ticket';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketCartService {
  constructor() { }
  private _cartList: Ticket[] = [];
  cartList: BehaviorSubject<Ticket[]> = new BehaviorSubject(this._cartList);

  addToCart(ticket: Ticket) {

    let item: Ticket|undefined  = this._cartList.find((v1)=>v1.Nombre == ticket.Nombre);
    if(!item){
      this._cartList.push({...ticket});
    }else{
      item.cantidad+=ticket.cantidad;
    }
    this.cartList.next(this._cartList);
    
  }


}
