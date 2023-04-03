import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { ImageCropperModule } from '../image-cropper/image-cropper.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ImageCropperModule,
    
  ]
})
export class AdminModule { }
