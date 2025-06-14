import { Component } from '@angular/core';
import { BagCartService } from '../bag-cart.service';
import { Bag } from '../bags-list/Bag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bags-cart',
  standalone: false,
  templateUrl: './bags-cart.component.html',
  styleUrls: ['./bags-cart.component.css']
})
export class BagsCartComponent {
   cartList$: Observable<Bag[]>; 
  constructor(private cart: BagCartService){
    this.cartList$ = cart.cartList.asObservable();
  }
}
