import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorRoutingModule } from './vendor-routing.module';
import { BecomeVendorComponent } from './become-vendor/become-vendor.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorReportsComponent } from './vendor-reports/vendor-reports.component';
import { VendorSalesComponent } from './vendor-sales/vendor-sales.component';
import { VendorSettingComponent } from './vendor-setting/vendor-setting.component';
import { VendorblogsComponent } from './vendorblogs/vendorblogs.component';
import { AccountInfoTabComponent } from './account-info-tab/account-info-tab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';




@NgModule({
  declarations: [
    BecomeVendorComponent,
    VendorDashboardComponent,
    VendorProfileComponent,
    VendorReportsComponent,
    VendorSalesComponent,
    VendorSettingComponent,
    VendorblogsComponent,
    AccountInfoTabComponent,
    VendorOrdersComponent,
    VendorProductsComponent,
      
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxPaginationModule,


  ]
})
export class VendorModule { }
