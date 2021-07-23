import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeBazzarHomeComponent } from './bike-bazzar-home/bike-bazzar-home.component';
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import { ExistingOrderComponent } from './existing-order/existing-order.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '', component: BikeBazzarHomeComponent
  },
  {
    path: 'create-new-order', component: CreateNewOrderComponent 
  },
  {
    path: 'existing-order', component: ExistingOrderComponent
  },
  {
    path: 'summary', component: SummaryComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
