import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bag } from '../bags-list/Bag';


@Component({
  selector: 'app-add-bag',
  standalone: false,
  templateUrl: './add-bag.component.html',
  styleUrls: ['./add-bag.component.css']
})
export class AddBagComponent {
   @Output() bagAdded = new EventEmitter<Bag>();

    AddBagForm= new FormGroup({
      name: new FormControl<string>('', Validators.required),
      material: new FormControl<string>('', Validators.required),
      price: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
      stock: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
      image: new FormControl<string>('',),
          discount: new FormControl<boolean>(false),
});


onSubmit() {
  if (this.AddBagForm.valid) {
    const newBag: Bag = {
      id: 0,
      name: this.AddBagForm.value.name ?? '',
      material: this.AddBagForm.value.material ?? '',
      price: Number(this.AddBagForm.value.price) ?? 0,
      stock: Number(this.AddBagForm.value.stock) ?? 0,
      image: this.AddBagForm.value.image ?? '',
      discount: this.AddBagForm.value.discount ?? false, 
      quantity: 0,
    };
    this.bagAdded.emit(newBag);
    this.AddBagForm.reset({ stock: 0, price: 0, discount: false });
  }
}

}






  

