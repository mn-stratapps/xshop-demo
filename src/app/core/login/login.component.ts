import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { threadId } from 'worker_threads';
import { ThumbnailsMode } from 'ng-gallery';
import Swal from 'sweetalert2';
import { error } from 'protractor';
import {SocialAuthService,GoogleLoginProvider,SocialUser,} from "@abacritt/angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/shared/services/previous-url.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  isActivateUrl = false;
  loginForm: FormGroup;
  reactivateEmailForm:FormGroup;
  submitted = false;
  error = '';
  socialUser!: SocialUser;
  loading = false;
  returnUrl: string;
  returnBackUrl:string;
  accessToken: any;
  emailActivationToken: any;
  activatedRoute: any;
  show: boolean = false;
  previousUrll:string;
  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,
    private router: Router,private httpService:AuthenticationService,
     private socialAuthService: SocialAuthService,private httpClient: HttpClient,private urlService: UrlService) {
      const currentUrl = this.router.url;
      if(currentUrl.includes('reactivate/account')){
        this.isActivateUrl = true;
      }else{
        this.isActivateUrl = false;
      }
     }

  ngOnInit(){
    // let value = this.route.snapshot.queryParams['name'];
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      this.previousUrll = previousUrl
      console.log('previous url: ', this.previousUrll);
    });
        if(this.isActivateUrl){
      this.initializeReactivateEmailForm();
  
      }else{
      this.initializeLoginForm()
      }
      this.socialAuthService.authState.subscribe((user) => {
        this.socialUser = user;
        console.log(this.socialUser)
        // this.loggedIn = (user != null);
      });
  // this.httpService.navigateToDashboardIfUserExists();
   //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }



  getAccessToken() {
    this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  }

  getGoogleCalendarData(): void {
    if (!this.accessToken) return;

    this.httpClient
      .get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: { Authorization: `Bearer ${this.accessToken}` },
      })
      .subscribe((events) => {
        alert('Look at your console');
        console.log('events', events);
      });
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

  get f() {return this.loginForm.controls; }
  get fv() {return this.reactivateEmailForm.controls;}

  getUserDetails(){
    // const currentUser = localStorage.getItem( 'currentUser' );
    // this.accessToken = JSON.parse( currentUser )['Token'];
    this.httpService.getUserDetails(this.accessToken)
    .subscribe({
      next:(data) => {
        //console.log(data);
        localStorage.setItem("role_id", JSON.stringify(data.role));

        //superadmin
        if(data.role === 1){
          this.router.navigate(['/home/super_admin'])
          .then(() => {
            window.location.reload();
          });
        }
        //admin
        else if(data.role === 2){
          this.router.navigate(['admin/dashboard'])
          .then(() => {
            window.location.reload();
          });
        }
        //vendor&user
        else if(data.role === 3){
          this.router.navigate(['/home/vendor'])
        }
        //user
        else if(data.role === 4){
          this.router.navigate(['/home/electronics'])
          .then(() => {
            window.location.reload();
          });
        }
        else{
          console.log("role not defined")
        }
        localStorage.setItem("user_name", JSON.stringify(data.username));
  
      },
      error:(error)=>{
      this.error = error;
      console.error(error)
      this.loading = false;
  }
  });
  }
  prevUrl(){
    this.httpService.getUserDetails(this.accessToken)
    .subscribe({
      next:(data) => {
        //console.log(data);
        localStorage.setItem("role_id", JSON.stringify(data.role));
        localStorage.setItem("user_name", JSON.stringify(data.username));
        localStorage.setItem("newsletter", 'true');

        this.router.navigate([this.previousUrll])
        
        .then(() => {
          window.location.reload();
        });
      }
      })
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

  // signInWithGoogle(){
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //       this.socialAuthService.authState.subscribe((user) => {
  //       this.socialUser = user;
  //       console.log(this.socialUser);
  //     });
  // }
  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
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
    if(this.previousUrll === null || this.previousUrll === '/core/signup'){
    this.getUserDetails();
    }
    else if(this.previousUrll && data.role_id === 4 ){
      this.prevUrl()     
    } else if(this.previousUrll && data.role_id === 3){
      this.prevUrl()
    } else{
      this.getUserDetails();
    }
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
        })
        this.router.navigate(['/core/reactivate/account']);
       }else if(error.error.message === 'Username Not Found' || 'Incorrect Password')
       {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect Username/Password',
        })
       }
       else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong, Try again',
        })
       }
   }
  });
        // console.log(results);
        //console.log(this.user);
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}

}
