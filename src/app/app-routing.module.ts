import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { PagesComponent } from './pages/pages.component';
import { ElementsComponent } from './elements/elements.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home/electronics',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./modules/vendor/vendor.module').then(m => m.VendorModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shop',
    component: ShopComponent,
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  { 
    path: 'pages',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) 
  },
  { 
    path: 'elements', 
    component: ElementsComponent,
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
    { 
      path: 'core', 
     // component: ElementsComponent,
      loadChildren: () => import('./core/core-module/core-module.module').then(m => m.CoreModuleModule) },
  {
    path: '**', // Navigate to Home Page if not found any page
    redirectTo: 'home/fashion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
