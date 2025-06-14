import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Bag } from '../bags-list/Bag';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})

export class InputIntegerComponent implements OnInit {
  constructor(){}
  
  @Input({required: true}) 
  quantity!: number; 

  @Input({required: true})  
  max!: number;

  @Output() 
  quantityChange: EventEmitter<number> = new EventEmitter <number>(); 

   @Output() 
  maxReached: EventEmitter<string> = new EventEmitter <string>(); 
  ngOnInit(): void {
      
  }

  upquantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("no hay mas stock");
    }
    
  }
  downquantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  onChangeQuantity(event: KeyboardEvent){
    event.preventDefault();

  const input = event.target as HTMLInputElement;
  const value = input.value;
  const numericValue = Number(value);
  const isValidNumber = /^\d+$/.test(value);

  if (isValidNumber) {
    this.quantity = numericValue;
    this.quantityChange.emit(this.quantity);

    if (numericValue > this.max) {
      this.maxReached.emit("no hay suficiente stock"); // Notifica al padre
    }
  }
  }
}
