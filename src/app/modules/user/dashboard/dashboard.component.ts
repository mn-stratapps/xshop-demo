import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';
import { threadId } from 'worker_threads';
import { UserService } from '../service/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

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
  passwordtext = true;
  current_password:any;
  new_password:any;
  confirm_password:any;
  modal: any;
  @ViewChild('otpModalLabel') otpModalLabel : any;
  constructor(public httpService:AuthenticationService, public userService:UserService,private router: Router,private modalService: NgbModal) { }

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
  passwordEdit(){
    this.passwordtext = !this.passwordtext
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
  openModal(otpModalLabel){
    this.modalService.open(otpModalLabel);
  }

  emailUpdate(){
    const object = {
      'email': this.userData.email,
};

this.httpService.emailUpdate(object)
.subscribe({
  next:(data) =>{
     console.log(data);
     this.emailActivationToken = data.emailActivationToken;
        this.httpService.emailActivationToken = data.emailActivationToken;
        if(data.message === 'Requested for Email Update'){
          this.modalService.open(this.otpModalLabel)

        }
  },
  error:(error)=>{
    this.error = error;
    //console.error(error.error)
    console.log(error)
    if (error.error.message ==='Email already exists, try another '){
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
  saveEmail(){
    const object = {
      'otp': this.otp,
};

this.httpService.validateemailOtp(object)
.subscribe({
  next:(data) =>{
     console.log(data);
    //  this.emailActivationToken = data.emailActivationToken;
    //     this.httpService.emailActivationToken = data.emailActivationToken;
  if(data.message === 'Email Updated Successfully'){
    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'Updated Succesfully',
    })
    this.modalService.dismissAll();
    this.emailtext = true;

    
  }
      },
  error:(error)=>{
    this.error = error;
    //console.error(error.error)
    console.log(error)
    if (error.error.message ==='Incorrect OTP, Please try again'){
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

  passwordUpdate(){
    const object = {
      'current_password': this.current_password,
      'new_password':this.new_password,
      'confirm_password':this.confirm_password
};

this.httpService.passwordUpdate(object)
.subscribe({
  next:(data) =>{
     console.log(data);
     if(data.message ==='Successfully Changed Your Password'){
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'Updated Succcessfully',
        width: '400px',
      })
      this.passwordtext = true;
      this.httpService.logout();
      this.router.navigate(['core/login'])
    }
  },
  error:(error)=>{
    this.error = error;
    console.log(error)
    
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
        
        console.log(error)       
    }
    })
  }
}
