import { Component } from '@angular/core';
import { TicketCartService } from '../ticket-cart.service';
import { Ticket } from '../ticket-list/Ticket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$!: Observable<Ticket[]>;


  constructor(private cart: TicketCartService){
    this.cartList$=cart.cartList.asObservable();
  }

  
}
