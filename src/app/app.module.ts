import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { BikeBazzarHomeComponent } from './bike-bazzar-home/bike-bazzar-home.component';
import { CreateNewOrderComponent } from './create-new-order/create-new-order.component';
import { ExistingOrderComponent } from './existing-order/existing-order.component';
import { FormDataComponent } from './create-new-order/form-data/form-data.component';
import { SummaryComponent } from './summary/summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BikeBazzarHomeComponent,
    CreateNewOrderComponent,
    ExistingOrderComponent,
    FormDataComponent,
    SummaryComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
