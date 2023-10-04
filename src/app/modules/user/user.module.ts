import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from "../../shared/shared.module";
import {NgxPaginationModule} from 'ngx-pagination';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSecurityComponent } from './user-security/user-security.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
    declarations: [DashboardComponent, UserInfoComponent, UserAddressComponent, UserOrdersComponent, UserWishlistComponent, UserProfileComponent, UserSecurityComponent, UserDashboardComponent],
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
