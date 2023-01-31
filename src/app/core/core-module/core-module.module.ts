import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ReactiveFormsModule,FormsModule, FormControl, FormControlName } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CoreComponent,
    ForgotPasswordComponent,
    
  ],
  imports: [
    CommonModule,
    CoreModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    //RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
})
export class CoreModuleModule { }
