import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Security
import { LoginComponent } from './security/login/login.component';
import { ModuleComponent } from './navigation/module/module.component';
import { BillingMainComponent } from './core/billing/billing-main/billing-main.component';
import { AccountingMainComponent } from './core/accounting/accounting-main/accounting-main.component';
import { InventoryMainComponent } from './core/inventory/inventory-main/inventory-main.component';
import { UsersMainComponent } from './core/users/users-main/users-main.component';
import { CreateCustomerComponent } from './core/billing/customer/create-customer/create-customer.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '\login',
    component: LoginComponent
  },
  {
    path: '\modules',
    component: ModuleComponent
  },
  {
    path:'billing-main',
    component: BillingMainComponent
  },
  {
    path:'accounting-main',
    component: AccountingMainComponent
  },
  {
    path:'inventory-main',
    component: InventoryMainComponent
  },
  {
    path:'users-main',
    component: UsersMainComponent
  },
  //Customer
  {
    path:'create-customer',
    component: CreateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
