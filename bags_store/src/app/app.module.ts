import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BagsListComponent } from './bags-list/bags-list.component';
import { BagsAboutComponent } from './bags-about/bags-about.component';
import { BagsBagComponent } from './bags-bag/bags-bag.component';
import { BagsCartComponent } from './bags-cart/bags-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { BagCartService } from './bag-cart.service';
import { HttpClientModule } from '@angular/common/http';
import { BagDataService } from './bag-data.service';
import { AddBagComponent } from './Add-bag/add-bag.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BagsListComponent,
    BagsAboutComponent,
    BagsBagComponent,
    BagsCartComponent,
    InputIntegerComponent,
    AddBagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [BagCartService],
  bootstrap: [AppComponent],
})
export class AppModule { }
