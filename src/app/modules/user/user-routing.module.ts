import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserSecurityComponent } from './user-security/user-security.component';

const routes: Routes = [
  {
    path: '',
     component: UserDashboardComponent,
    children:[
      {
        path:'user-account-info',
        component:UserInfoComponent
      },
      {
        path:'user-address-book',
        component:UserAddressComponent
      },
      {
        path:'user-orders',
        component:UserOrdersComponent
      },
      {
        path:'user-wishlist',
        component:UserWishlistComponent
      },
      {
        path:'user-profile',
        component:UserProfileComponent
      },
      {
        path:'user-security',
        component:UserSecurityComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
