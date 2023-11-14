import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeVendorComponent } from './become-vendor/become-vendor.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
// import { AllProductsTabComponent } from './vendor-orders/all-products-tab.component';
import { AccountInfoTabComponent } from './account-info-tab/account-info-tab.component';
import { VendorSalesComponent } from './vendor-sales/vendor-sales.component';
import { VendorReportsComponent } from './vendor-reports/vendor-reports.component';
import { VendorblogsComponent } from './vendorblogs/vendorblogs.component';
import { VendorSettingComponent } from './vendor-setting/vendor-setting.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';

const routes: Routes = [
  { 
    path: 'become/vendor', 
    component: BecomeVendorComponent 
  },
  { 
    path: '', 
    component: VendorDashboardComponent,
    children:[
      
        { 
          path: 'account-info', 
          component: AccountInfoTabComponent 
        },
        { 
          path: 'vendor-sales', 
          component:VendorSalesComponent 
        },
        { 
          path: 'profile', 
          component: VendorProfileComponent 
        },
        { 
          path: 'my-products', 
          component: VendorProductsComponent 
        },
        { 
          path: 'my-orders', 
          component: VendorOrdersComponent 
        },
        { 
          path: 'vendor-reports', 
          component:VendorReportsComponent 
        },
        { 
          path: 'vendor-blogs', 
          component:VendorblogsComponent
        },
        { 
          path: 'vendor-settings', 
          component:VendorSettingComponent
        },
    ]
  },

  // { 
  //   path: 'dashboard/allproducts', 
  //   component: AllProductsTabComponent
  // },
  { 
    path: 'become/vendor', 
    component: BecomeVendorComponent 
  },
  { 
    path: 'vendor/dashboard', 
    component: VendorDashboardComponent 
  },
  { 
    path: 'vendor/dashboard/my-products', 
    component: VendorProductsComponent 
  },
  { 
    path: 'vendor/dashboard/my-orders', 
    component: VendorOrdersComponent 
  },
  { 
    path: 'account-info', 
    component: AccountInfoTabComponent 
  },
  // { 
  //   path: 'vendor/dashboard/vendor-reports', 
  //   component:VendorReportsComponent 
  // },
  // { 
  //   path: 'vendor/dashboard/vendor-blogs', 
  //   component:VendorblogsComponent
  // },
  // { 
  //   path: 'vendor/dashboard/vendor-settings', 
  //   component:VendorSettingComponent
  // },
  
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
