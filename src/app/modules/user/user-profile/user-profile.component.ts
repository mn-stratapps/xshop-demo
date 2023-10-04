import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  accessToken: any;
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
  userData: User = new User();
  error: any;
  loading: boolean;

  @ViewChild('otpModalLabel') otpModalLabel : any;

  constructor(private modalService: NgbModal,private httpService: AuthenticationService,private router: Router,){
    const currentUser = localStorage.getItem( 'currentUser' );
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];
    }
  }

  ngOnInit() {
    this.getUserDetails();
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
  getUserDetails() {
    this.httpService.getUserDetails(this.accessToken)
    .subscribe({
      next:(data) =>{
        this.userData = data;
         console.log(this.userData);
      },
      error:(error)=>{
        this.error = error;
        this.loading = false;
        console.log(error)       
    }
    })
  }
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
          title: 'Success!',
          text: 'Updated Succcessfully',
          width: '400px',
        })
        this.inputtext = true;
      }
     }
  },
  error:(error)=>{
    this.error = error;
    console.log(error)
    if(error.error?.first_name && error.error?.first_name[0] ==='This field may not be blank.'){
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'First name is empty',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        this.usernametext = true;
      }
     }else if(error.error?.last_name && error.error?.last_name[0] ==='This field may not be blank.'){
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Last name is empty',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        this.usernametext = true;
      }
     }
    
    
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
          title: 'Success!',
          text: 'Updated Succcessfully',
          width: '400px',
        })
        this.usernametext = true;
      }
     }
  },
  error:(error)=>{
    this.error = error;
    console.log(error)
    if(error.error.message='Username already exists, try another '){
      {
        {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username already Exist! Try another',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
        this.usernametext = true;
      }
      }
     }
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
          title: 'Success!',
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
      
       if (error.error.message === 'Mobile Number already exists'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Entered Mobile Number already Exists',
        })
       }else if(error.error?.mobile_number && error.error?.mobile_number[0] ==='A valid integer is required.'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Enter Mobile Number',
        })

       }else if(error.error.message === 'mobile number should be 10 digits'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Enter Valid Mobile Number',
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
        title: 'Success!',
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
    console.log(error);
    if(error.error.message === 'check password length'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter 8 digit password',
      })
    }else if(error.error.message === 'There was an error with your Password combination'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'New Password && Comfirm Password not matched',
      })
    }else if(error.error.message === 'Incorrect Current Password'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'current password does not matched',
      })   
}  
}
})
}
}
