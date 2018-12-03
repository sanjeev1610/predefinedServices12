import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersService } from './services/customers.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MyInterceptor} from './interceptor/my.interceptor';
import { CustomersComponent } from './components/customers.component';

@NgModule({
  declarations: [
    AppComponent, CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }],
  bootstrap: [CustomersComponent]
})
export class AppModule { }
