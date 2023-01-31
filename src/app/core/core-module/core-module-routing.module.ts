import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
//import { ForgetPasswordComponent } from 'src/app/pages/account/forget-password/forget-password.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {path:'activate_account/:token',component:SignupComponent},
  {path:'reactivate/account',component:LoginComponent},
  {path:'forgot/password',component:ForgotPasswordComponent},
   {path:'reset/password/:token',component:ForgotPasswordComponent},
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreModuleRoutingModule { }
