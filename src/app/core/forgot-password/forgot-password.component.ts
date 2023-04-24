import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isValidatePasswordUrl = false;
  EMAIL_ID_PATTERN = /^(([a-zA-Z0-9.!#$&'*+\/=?_`{|}~-]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  forgotPasswordForm: FormGroup;
  validatePasswordForm: FormGroup;
  confirmPasswordError = false;
  submitted = false;
  loading = false;
  token: any;
  statusCode : any;
  isShowAlertMessage = false;
  alertClass = '';
  message = '';
  showSignInButton = false;
  userProviderMessage: any;
  constructor(private formBuilder: FormBuilder,private httpservice:AuthenticationService, public router: Router,private activatedRoute: ActivatedRoute) {
    const currentUrl = this.router.url;
    if ( currentUrl.includes( 'reset/password/' ) ) {
        this.isValidatePasswordUrl = true;
    } else {
      this.isValidatePasswordUrl = false;
    }
   }
   get f() {
    return this.forgotPasswordForm.controls;
   }

   get fv() {
    return this.validatePasswordForm.controls;
   }

   checkConfirmPassword(){
    if(this.validatePasswordForm.value.confirmPassword === this.validatePasswordForm.value.password){
      this.confirmPasswordError = false;
    } else{
      this.confirmPasswordError = true;
    }

   }

   initializeForgotPasswordForm(){
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  });
  }

  initializeValidatePasswordForm(){
    this.validatePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      token: ['']
  });
  }
 resetPassword(){
  this.submitted = true;
    if (this.forgotPasswordForm.invalid) {
      return;
 }
 this.showSignInButton = false;
 this.loading = true;
this.httpservice.resetPassword(this.forgotPasswordForm.value)
// .pipe(first())
.subscribe(
  {
    next:(data) => {
      console.log(data);
        if(data.message ='Password reset email sent'){
          this.userProviderMessage = 'Your password reset email has been sent.';
          Swal.fire({
            icon: 'success',
            title: "Reset link sent to Mail, Please check your Mail"
           });
          this.router.navigate(['/login']);
        }
        
    },
    error:(error)=>{
      this.message = error.error.message;
     this.loading = false;
     console.error(error)
     if(error.error?.email.message === 'This Email is Not Registered'){
      Swal.fire({
        icon: 'warning',
        title: "This Email is not Registered"
       });
     }
    }
  }
  
);
}

validatePassword(){
  this.submitted = true;
 this.checkConfirmPassword();

 if (this.validatePasswordForm.invalid || this.confirmPasswordError){
  return;
 }
//  delete this.validatePasswordForm.value.confirmPassword;
 this.activatedRoute.queryParams.subscribe(params => {
  this.token = this.activatedRoute.snapshot.params['token'];
  // console.log(this.token);
});
 //console.log(this.activatedRoute.snapshot.params['token']) 
 this.validatePasswordForm.value.token = this.token;
 this.loading = true;
 this.httpservice.validatePassword(this.validatePasswordForm.value)
 //.pipe(first())
 .subscribe(
  {
next:(data) => {
  console.log(data);
    if(data.message === 'Password changed Successfully, Please Login' ){
      //this.userProviderMessage = data.message;
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'Your password is changed Successfully!. Enter your email and password to sign in.',
        width: '400px',
       })
      this.router.navigate(['/core/login']);
    }else{
      this.message = data.message;
      this.alertClass = 'alert-danger';
    }
    this.loading = false;
  }, 
  error:(error)=>{
    this.alertClass = 'alert-danger';
       this.message = error.error.message;
    
  }
});
}




  ngOnInit(){
    if(this.isValidatePasswordUrl){
      console.log()
      this.initializeValidatePasswordForm();
      this.activatedRoute.queryParams.subscribe( (param: any) => {
        this.token = this.activatedRoute.snapshot.params['token'];
       });
      //  this.activatedRoute.params.subsribe(params => {
      //   console.log(params['clientId'])
      // });
       console.log(this.token);
      //  console.log(this.activatedRoute.snapshot.params['token'])
      } else {
       this.initializeForgotPasswordForm();
      }
    }
  

}
