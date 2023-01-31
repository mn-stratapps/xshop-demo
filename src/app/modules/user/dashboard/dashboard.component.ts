import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';
import { threadId } from 'worker_threads';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public openDashboard: boolean = false;
  userData: User = new User();
  accessToken: any;
  error: any;
  inputtext = true;
  usernametext = true;
  mobiletext = true;
  emailtext = true;
  emailActivationToken: any;
  showModalBox: boolean = false;
  otp: any;
  constructor(public httpService:AuthenticationService, public userService:UserService,private router: Router) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }  
  displayTextbox(){
    this.inputtext=!this.inputtext;
  }
  editUsernameEdit(){
    this.usernametext = !this.usernametext;
  }
  mobileEdit(){
    this.mobiletext = !this.mobiletext;
  }
  emailEdit(){
    this.emailtext = !this.emailtext
  }
  // modalButton1(){

  // }
namesUpdate(){
    const object = {
      'first_name': this.userData.first_name,
      'last_name' :this.userData.last_name
    };

this.httpService.namesUpdate(object)
.subscribe({
  next:(data) =>{
    data
     console.log(data);
     if(data.message='updates successfully'){
      {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Updated Succcessfully',
          width: '400px',
        })
        this.inputtext = true;
      }
     }
  },
  error:(error)=>{
    this.error = error;
    //console.error(error.error)
    console.log(error)
    
}

})
  }

  usernameUpdate(){
    const object = {
      'username': this.userData.username,
    };

this.httpService.usernameUpdate(object)
.subscribe({
  next:(data) =>{
    data
     console.log(data);
     if(data.message='updates successfully'){
      {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Updated Succcessfully',
          width: '400px',
        })
        this.usernametext = true;
      }
     }
  },
  error:(error)=>{
    this.error = error;
    //console.error(error.error)
    console.log(error)
    
}

})
  }
  mobilenumberUpdate(){
    const object = {
      'mobile_number': this.userData.mobile_number,
      
    };

this.httpService.mobilenumberUpdate(object)
.subscribe({
  next:(data) =>{
    data
     console.log(data);
     if(data.message === 'Mobile Number Updated Successfully '){
      {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Updated Succcessfully',
          width: '400px',
        })
        this.inputtext = true;
      }
     }
  },
  error:(error)=>{
    this.error = error;
       console.error(error)
      
       if (error.message = 'Mobile Number already exists'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Entered Mobile Number already Exists',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
       }
}

})
  }
  saveEmail(){
    const object = {
      'otp': this.otp,
};

this.httpService.validateemailOtp(object)
.subscribe({
  next:(data) =>{
    data
     console.log(data);
     this.emailActivationToken = data.emailActivationToken;
        this.httpService.emailActivationToken = data.emailActivationToken;
  },
  error:(error)=>{
    this.error = error;
    //console.error(error.error)
    console.log(error)
    if (error.message='Incorrect OTP, Please try again'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect OTP, Please try again',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
    }
}

})
  }

emailUpdate(){
    const object = {
      'email': this.userData.email,
};

this.httpService.emailUpdate(object)
.subscribe({
  next:(data) =>{
    data
     console.log(data);
     this.emailActivationToken = data.emailActivationToken;
        this.httpService.emailActivationToken = data.emailActivationToken;
  },
  error:(error)=>{
    this.error = error;
    //console.error(error.error)
    console.log(error)
    if (error.message='Email already exists, try another'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Entered Email already exists, try another',
        //footer: '<a href="">Why do I have this issue?</a>'
      })
    }
}

})
  }

  getUserDetails() {
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    this.httpService.getUserDetails(this.accessToken)
    .subscribe({
      next:(data) =>{
        this.userData = data;
         console.log(this.userData);
      },
      error:(error)=>{
        this.error = error;
        //console.error(error.error)
        console.log(error)       
    }
    })
  }
}
