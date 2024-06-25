import { Component } from '@angular/core';
import { Ticket } from './Ticket';
import { TicketCartService } from '../ticket-cart.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss'
})
export class TicketListComponent {
tickets: Ticket[] = [
{
      "Nombre":"Campo Delantero",
      "Precio": 120000,
      "Stock": 2600,
      "imagen":"assets/img/campo delantero.png",
      "ultimas": false,
      "cantidad":0,
    },
    {
      "Nombre":"Campo Trasero",
      "Precio": 100000,
      "Stock": 0,
      "imagen":"assets/img/campo trasero.png",
      "ultimas": false,
      "cantidad":0,
    },
    {
      "Nombre":"Platea Alta",
      "Precio": 90000,
      "Stock": 15000,
      "imagen":"assets/img/platea alta.png",
      "ultimas": false,
      "cantidad":0,
    },
    {
      "Nombre":"Platea Baja",
      "Precio": 180000,
      "Stock": 10,
      "imagen":"assets/img/platea baja.png",
      "ultimas": true,
      "cantidad":0,
    },
    {
      "Nombre":"Platea Trasera",
      "Precio": 50000,
      "Stock": 8000,
      "imagen":"assets/img/platea trasera.png",
      "ultimas": false,
      "cantidad":0,
    },
];


constructor(private cart: TicketCartService){
  
}

showMessage: boolean = false;
message: string = '';

  maxLimite(m: string): void {
    this.showMessage = true;
    this.message = m;
  }
  hideMessage(): void {
    this.showMessage = false;
    this.message = '';
  }

addToCart(ticket: Ticket):void{
  this.cart.addToCart(ticket);
  ticket.Stock-=ticket.cantidad;
  ticket.cantidad=0;
}



}
