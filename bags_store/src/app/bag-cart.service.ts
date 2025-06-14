import { Injectable } from '@angular/core';
import { Bag } from './bags-list/Bag';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BagCartService {
  constructor() { }
  private _cartList: Bag[] = [];
  cartList: BehaviorSubject<Bag[]> = new BehaviorSubject (this._cartList);
  
  addToCart(bag: Bag){ 
    let item: Bag | undefined  = this._cartList.find( (v1) => v1.name == bag.name ); //busco si la cartera ya esta en el carrito OK
    if(!item){
      this._cartList.push({...bag}); // si no esta la agrego OK
    }else{
      item.quantity += bag.quantity; //si compro mas de una voy sumando esa cant al item del carrito OK
    }
    this.cartList.next(this._cartList); //le digo al behaviour subjects que actualice el valor y lo notifique.
  }
}
