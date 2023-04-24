import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { ImageCropperModule } from '../image-cropper/image-cropper.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImageCropperModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
