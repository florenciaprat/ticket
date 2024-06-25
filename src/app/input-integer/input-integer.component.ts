import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
constructor(){ }
  @Input()
  cantidad!: number;
  
  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxLimite:  EventEmitter<string> = new EventEmitter<string>();


  upCantidad(): void{
    if(this.cantidad<this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maxLimite.emit("Se alcanzó el maximo de compra");
    }
  }
  downCantidad(): void{
    if(this.cantidad>0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
   
   }
  
   onChangeCantidad(event: any): void{
      console.log(event.key);
      this.cantidadChange.emit(this.cantidad);
  }
}
