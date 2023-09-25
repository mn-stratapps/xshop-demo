import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { ImageCropperModule } from '../image-cropper/image-cropper.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { searchFilterPipe } from './searchFilterPipe';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminVendorsComponent } from './admin-vendors/admin-vendors.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';

@NgModule({
  declarations: [AdminDashboardComponent,searchFilterPipe, AdminProductsComponent, AdminOrdersComponent, AllProductsComponent, AllOrdersComponent, AdminSalesComponent, AdminUsersComponent, AdminVendorsComponent, AdminDetailsComponent, AdminSettingsComponent, AdminReportsComponent, AdminBlogsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImageCropperModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
  ],providers:[DatePipe]
})
export class AdminModule { }
