import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { threadId } from 'worker_threads';
import { ThumbnailsMode } from 'ng-gallery';
import Swal from 'sweetalert2';
import { error } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isActivateUrl = false;
  loginForm: FormGroup;
  reactivateEmailForm:FormGroup;
  submitted = false;
  error = '';
  loading = false;
  returnUrl: string;
  accessToken: any;
  emailActivationToken: any;
  activatedRoute: any;
  show: boolean = false;

  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,
    private router: Router,private httpService:AuthenticationService) {
      const currentUrl = this.router.url;
      if(currentUrl.includes('reactivate/account')){
        this.isActivateUrl = true;
      }else{
        this.isActivateUrl = false;
      }
     }

  ngOnInit(){

    if(this.isActivateUrl){
      this.initializeReactivateEmailForm();
  
      }else{
      this.initializeLoginForm()
      }
  // this.httpService.navigateToDashboardIfUserExists();
   //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }
  password() {
    this.show = !this.show;
}
initializeLoginForm(){
  this.loginForm = this.formBuilder.group({
    username:['',[Validators.required,]],
    password:['', [Validators.required, Validators.minLength(8)]]
 });
}

initializeReactivateEmailForm(){
    this.reactivateEmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      emailActivationToken: ['']
  });
  
}

  get f() { return this.loginForm.controls; }
  get fv() {return this.reactivateEmailForm.controls;}

  getUserDetails(){
    // const currentUser = localStorage.getItem( 'currentUser' );
    // this.accessToken = JSON.parse( currentUser )['Token'];
    this.httpService.getUserDetails(this.accessToken)
    .subscribe({
      next:(data) => {
        console.log(data);
        //superadmin
        if(data.role === 1){
          this.router.navigate(['/home/super_admin'])
        }
        //admin
        else if(data.role === 2){
          this.router.navigate(['admin/dashboard'])
        }
        //vendor&user
        else if(data.role === 3){
          this.router.navigate(['/home/vendor'])
        }
        //user
        else if(data.role === 4){
          this.router.navigate(['/home/fashion'])
        }
        else{
          console.log("role not defined")
        }
        
      },
      error:(error)=>{
      this.error = error;
      console.error(error)
      this.loading = false;
  }
  });
  }


  reactivateEmail(){
    this.submitted=true;
    if(this.reactivateEmailForm.invalid){
      return;
    }
this.httpService.reactivateAccount(this.reactivateEmailForm.value)
.subscribe({
  next:(data)=>{
    console.log(data);
    this.emailActivationToken = data.emailActivationToken;
        this.httpService.emailActivationToken = data.emailActivationToken;
    if(data.message='Account Activation Email Sent'){
      {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Activation Email sent, Please Verify Otp',
          width: '400px',
        })
        this.router.navigate(['/core/activate_account/'+ this.emailActivationToken]);

      }
    }
  },
  error:(error)=>{
    this.error = error;
       console.log(error)
       this.loading = false;
       if (error.error.message === 'This Email is Not Registered'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Enter Registered Email Id / Create A New Account',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
       }
  }
})
  }


  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.httpService.login(this.f.username.value, this.f.password.value)
    .subscribe({
      next:(data) => {
        console.log(data);
        
    const userToken = { Token: data.accessToken,};
    this.accessToken = data.accessToken;
    this.httpService.accessToken=data.accessToken
    localStorage.clear();

    localStorage.setItem('currentUser', JSON.stringify(userToken));

    this.getUserDetails();
    // const currentUser = localStorage.getItem( 'currentUser' );
    // const token = JSON.parse( currentUser ).access_token;
    // this.userService.redirectPage(token)
        // user.authdata = window.btoa(username + ':' + password);
         //     localStorage.setItem('user', JSON.stringify(user));
         //     this.userSubject.next(user);
         //     console.log(user);
         //     return user;
        
      
      },
      error:(error)=>{
       this.error = error;
      // console.error(error)
      console.log(error)
       this.loading = false;
       if(error.error.message === 'Account is in In-Active, please Activate your account'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...!',
          text: 'Please Activate your account to Login',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        this.router.navigate(['/core/reactivate/account']);
       }else if(error.error.message === 'Username Not Found' || 'Incorrect Password')
       {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect Username/Password',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
       }
   }
  });
        // console.log(results);
        //console.log(this.user);
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}

}
