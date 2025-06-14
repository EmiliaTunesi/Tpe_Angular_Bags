import { Component, OnInit } from '@angular/core';
import {Bag} from './Bag';
import { BagCartService } from '../bag-cart.service';
import { BagDataService } from '../bag-data.service';

@Component({
  selector: 'app-bags-list',
  standalone: false,
  templateUrl: './bags-list.component.html',
  styleUrls: ['./bags-list.component.css']
})
export class BagsListComponent implements OnInit {
  
  bags: Bag [] = [];
  
  constructor(private cart: BagCartService,
    private BagDataService: BagDataService){
  }

  ngOnInit(): void {
      this.BagDataService.getAll()
      .subscribe(bags=> this.bags = bags); //suscribirse a un observable
  }
  trackBagId(index: number, bag: any): number {
    return bag.id;
  }

addToCart(bag: Bag): void{
  this.cart.addToCart(bag); 
  bag.stock-=bag.quantity; //al stock le resto la cant comprada
  bag.quantity = 0; //vuelvo la cant a cero para la prox compra

}

maxReached(m:string){
   alert(m);
}

onBagAdded(bag: Bag): void {
  this.BagDataService.addBag(bag).subscribe((addedBag) => {
    this.bags.push(addedBag);
  });
}

}
