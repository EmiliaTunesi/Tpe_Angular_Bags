import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagsAboutComponent } from './bags-about/bags-about.component';
import { BagsBagComponent } from './bags-bag/bags-bag.component';

const routes: Routes = [
{
  path: '', 
  redirectTo: 'bags',
  pathMatch: 'full'
},
{
  path: 'bags', 
  component: BagsBagComponent
},
{
  path: 'about',
  component: BagsAboutComponent
},
{
  path: 'about',
  component: BagsAboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
