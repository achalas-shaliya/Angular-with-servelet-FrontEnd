import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemComponent } from './view/manage-item/manage-item.component';
import { ManageOrderComponent } from './view/manage-order/manage-order.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: ManageCustomersComponent
  },
  {
    path: 'items',
    component: ManageItemComponent
  },
  {
    path: 'orders',
    component: ManageOrderComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
