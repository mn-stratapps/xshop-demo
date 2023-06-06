import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from "../../shared/shared.module";
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    declarations: [DashboardComponent],
    exports: [GoogleMapsModule],
    imports: [
        CommonModule,
        UserRoutingModule,
        GoogleMapsModule,
        FormsModule, ReactiveFormsModule,
        SharedModule,
        NgxPaginationModule
    ]
})
export class UserModule { }
