import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { PasswordValidators } from "./password-validators";
import Swal from 'sweetalert2';
// import { RxwebValidators } from '@rxweb/reactive-form-validators';



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
confirmPasswordError = false;
errorMessage:'';
message: any;
show: boolean = false;

  constructor(private formBuilder:FormBuilder,private httpservice:AuthenticationService,
    private router:Router,private activatedRoute:ActivatedRoute) { 
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
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      //  password: ['', [Validators.required,Validators.pattern('^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$')]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.compose([
        Validators.required,
        Validators.minLength(8),
        PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
          requiresDigit: true
        }),
        PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
          requiresUppercase: true
        }),
        PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
          requiresLowercase: true
        }),
        PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
          requiresSpecialChars: true
        })
      ])]],

      // password:['', RxwebValidators.password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}} )], 
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      mobile_number:['', [Validators.required,
      Validators.pattern("^[0-9]{10}$"),
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
  get passwordValid() {
    return this.registerForm.controls["password"].errors === null;
  }

  get requiredValid() {
    return !this.registerForm.controls["password"].hasError("required");
  }

  get minLengthValid() {
    return !this.registerForm.controls["password"].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.registerForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.registerForm.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.registerForm.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.registerForm.controls["password"].hasError("requiresSpecialChars");
  }
  checkConfirmPassword(){
    if(this.registerForm.value.confirmPassword === this.registerForm.value.password){
      this.confirmPasswordError = false;
    } else{
      this.confirmPasswordError = true;
    }

  }
  password() {
    this.show = !this.show;
  }
  registerUser(){
    this.checkConfirmPassword()
    this.submitted=true;
     if(this.registerForm.invalid || this.confirmPasswordError){
      this.registerForm.markAllAsTouched();
      return false;
     }else{
    
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
        console.log(error);
        if(error.error?.username && error.error?.username[0] ==='user profile with this username already exists.'){
          Swal.fire({
            icon: 'error',
            title: 'oops!',
            text: 'Username Already Exist,Please LogIn',
            width: '400px',
          }).then((result) => {
            // if (result.isConfirmed) {
            //   this.router.navigate(['core/login'])
            // }
          })
        }else if(error.error?.email && error.error?.email[0] === 'Email Id already Exists'){
          Swal.fire({
            icon: 'error',
            title: 'oops!',
            text: 'Email Already Exist!, Please LogIn',
            width: '400px',
          }).then((result) => {
            // if (result.isConfirmed) {
            //   this.router.navigate(['core/login'])
            // }
          })
        }else if(error.error?.mobile_number && error.error?.mobile_number[0] ==='user profile with this mobile number already exists.'){
          Swal.fire({
            icon: 'error',
            title: 'oops!',
            text: 'Mobile Number Already Exist Try another',
            width: '400px',
          })
        }
    }
  });
}
// }else{
//   this.loading=false;
//   this.submitted=false;
// }
  }

  validateOtp(){
    this.submitted=true;
  if(this.validateOtpForm.invalid){
    return;
  }
  this.validateOtpForm.value.emailActivationToken=this.httpservice.emailActivationToken;
  this.activatedRoute.queryParams.subscribe(params => {
    this.validateOtpForm.value.emailActivationToken= this.activatedRoute.snapshot.params['token'];
   // this.emailActivationToken=this.httpservice.emailActivationToken
     this.httpservice.emailActivationToken = this.validateOtpForm.value.emailActivationToken;


      
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