import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './view/sidebar/sidebar.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ManageCustomersComponent} from './view/manage-customers/manage-customers.component';
import {ManageItemComponent} from './view/manage-item/manage-item.component';
import {ManageOrderComponent} from './view/manage-order/manage-order.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ManageCustomersComponent,
    ManageItemComponent,
    ManageOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
