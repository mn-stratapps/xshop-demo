import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
const routes: Routes = [


  {
    path: '',
     component: AdminDashboardComponent,
    children:[
      {
        path:'account-info',
        component:AdminDetailsComponent
      },
      {
        path:'my-products',
        component:AdminProductsComponent
      },
      {
        path:'all-products',
        component:AllProductsComponent
      },
      {
        path:'all-orders',
        component:AllOrdersComponent
      },
      {
        path:'my-orders',
        component:AdminOrdersComponent
      },
      {
        path:'sales',
        component:AdminSalesComponent
      },
      {
        path:'users',
        component:AdminUsersComponent
      },
      {
        path:'vendors',
        component:AdminVendorsComponent
      },
      {
        path:'reports',
        component:AdminReportsComponent
      },
      {
        path:'settings',
        component:AdminSettingsComponent
      },
      {
        path:'blogs',
        component:AdminBlogsComponent
      },
    ]
    },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
