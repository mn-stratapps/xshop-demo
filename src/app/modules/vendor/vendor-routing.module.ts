import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeVendorComponent } from './become-vendor/become-vendor.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';

const routes: Routes = [
  { 
    path: 'become/vendor', 
    component: BecomeVendorComponent 
  },
  { 
    path: 'dashboard', 
    component: VendorDashboardComponent 
  },
  { 
    path: 'profile', 
    component: VendorProfileComponent 
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
