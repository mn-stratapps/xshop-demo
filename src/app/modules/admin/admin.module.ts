import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { ImageCropperModule } from '../image-cropper/image-cropper.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { searchFilterPipe } from './searchFilterPipe';

@NgModule({
  declarations: [AdminDashboardComponent,searchFilterPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImageCropperModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
  ],providers:[DatePipe]
})
export class AdminModule { }
