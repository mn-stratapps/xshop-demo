import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

isOtpFormUrl = false;
registerForm: FormGroup;
loading = false;
submitted = false;
validateOtpForm:FormGroup;
emailActivationToken:any;
// confirmPasswordError = false;
errorMessage:'';
  message: any;
  constructor(private formBuilder:FormBuilder,private httpservice:AuthenticationService,private router:Router,private activatedRoute:ActivatedRoute) { 
    const currentUrl = this.router.url;
    if ( currentUrl.includes( 'activate_account/' ) ) {
        this.isOtpFormUrl = true;
    } else {
      this.isOtpFormUrl = false;
    }
  }

  initializeRegisterForm(){
    this.registerForm = this.formBuilder.group({
      username:['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile_number:['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
  });
  }
  initializeValidateOtpForm(){
    this.validateOtpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(5)]],
      emailActivationToken: ['']
  });
  }
  get f(){
    return this.registerForm.controls;
  }
  get fv() {
    return this.validateOtpForm.controls;
  }
  registerUser(){
    this.submitted = true;
    this.httpservice.register(this.registerForm.value)
    //.pipe(first())
  .subscribe(
    {
      next:(data) => {
        console.log(data);
        this.emailActivationToken = data.emailActivationToken;
        this.httpservice.emailActivationToken = data.emailActivationToken;
          if(data.success ='Account Activation Email Sent'){
            Swal.fire({
              icon: 'success',
              title: 'Congratulations!',
              text: 'Your account has been Registered. Please verify otp sent to mail',
              width: '400px',
            })
            this.router.navigate(['/core/activate_account/'+ this.emailActivationToken]);

      }
      },
      error:(error)=>{
        this.errorMessage = error;
        this.loading = false;
    }
  });
  }

  validateOtp(){
    this.submitted=true;
  if(this.validateOtpForm.invalid){
    return;
  }
  this.validateOtpForm.value.emailActivationToken=this.httpservice.emailActivationToken;
  this.activatedRoute.queryParams.subscribe(params => {
    this.validateOtpForm.value.emailActivationToken= this.activatedRoute.snapshot.params['token'];
    //this.emailActivationToken=this.httpservice.emailActivationToken
      this.validateOtpForm.value.emailActivationToken=this.httpservice.emailActivationToken;


      
    // console.log(this.token);
  });
  
  this.loading=true;
  this.httpservice.validateOtp(this.validateOtpForm.value)
  .subscribe(
    {
      next:(data) => {
        console.log(data);
        if(data.message ='Account successfully activated'){
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'Your Email is verified!, Please Login',
            width: '400px',
          })
          this.router.navigate(['/core/login']);

        }
      },
      error:(error)=>{
        this.message = error.error.message;
      }
    }
  )
  }


  ngOnInit() {
    if(this.isOtpFormUrl){
    this.initializeValidateOtpForm();

    }else{
    this.initializeRegisterForm()
    }
  }

}