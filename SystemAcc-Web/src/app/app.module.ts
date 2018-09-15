import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { ModuleComponent } from './navigation/module/module.component';
import { LoginComponent } from './security/login/login.component';
import { BillingMainComponent } from './core/billing/billing-main/billing-main.component';
import { CreateCustomerComponent } from './core/billing/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './core/billing/customer/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './core/billing/customer/list-customer/list-customer.component';
import { InventoryMainComponent } from './core/inventory/inventory-main/inventory-main.component';
import { ConfigurationMainComponent } from './core/configuration/configuration-main/configuration-main.component';
import { UsersMainComponent } from './core/users/users-main/users-main.component';
import { AccountingMainComponent } from './core/accounting/accounting-main/accounting-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModuleComponent,
    LoginComponent,
    BillingMainComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    InventoryMainComponent,
    ConfigurationMainComponent,
    UsersMainComponent,
    AccountingMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
