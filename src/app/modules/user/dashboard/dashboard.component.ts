import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';
import { threadId } from 'worker_threads';
import { UserService } from '../service/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country, State, City }  from 'country-state-city';
import { Useraddress } from 'src/app/core/models/useraddress';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/classes/product';
import { ProductService } from 'src/app/shared/services/product.service';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public products: Product[] = [];
  wishlistProducts: Product[] = [];
  myProducts: Product[] =[];
  public openDashboard: boolean = false;
  userData: User = new User();
  public Address: Useraddress[] = [];
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
  loading: boolean;
  submitted = false;
  addAddressForm:FormGroup;
  editProductForm:FormGroup;
  isAddNewAddress = false;
  isEditAddress : boolean;
  countries = Country.getAllCountries();
  show: boolean = false;
  states = null;
  cities = null;
  @ViewChild('country') country: ElementRef
  @ViewChild('city') city: ElementRef
  @ViewChild('state') state: ElementRef
  @ViewChild('otpModalLabel') otpModalLabel : any;
  selectedState: any;
  selectedCountry: any;
  aid: any;
  defaultAddress = false;
  constructor(public httpService:AuthenticationService,private formBuilder:FormBuilder, public userService:UserService,public productService:ProductService,private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.getAddress();
    this.initializeAddAddressForm();
    this.getWishlistProducts();
    this.getmyOrders();
  }
  getWishlistProducts(){
    this.productService.wishlistItems.subscribe(response => this.wishlistProducts = response);
  }
  password() {
    this.show = !this.show;
}

  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
        if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
          (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
        }
      }
  }
  logoutfromDashboard(){
    this.httpService.logout();
  }
  async addToCart(product: any) {
    const status = await this.productService.addToCart(product);
    if(status) {
      this.router.navigate(['/shop/cart']);
    }
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
  addNewAddress(){
    this.isAddNewAddress = !this.isAddNewAddress;
    this.addAddressForm.reset();
    this.isEditAddress = false;
  }
  // modalButton1(){
    onCountryChange($event): void {
      this.states = State.getStatesOfCountry(JSON.parse(this.country.nativeElement.value).isoCode);
      this.selectedCountry = JSON.parse(this.country.nativeElement.value);
      //this.cities = this.selectedState = this.selectedCity = null;
    }
  
    onStateChange($event): void {
      this.cities = City.getCitiesOfState(JSON.parse(this.country.nativeElement.value).isoCode, JSON.parse(this.state.nativeElement.value).isoCode)      // this.selectedState = JSON.parse(this.state.nativeElement.value);
      this.selectedState = JSON.parse(this.state.nativeElement.value);

      // this.selectedCity = null;
    }
    onCityChange($event): void {
     // this.selectedCity = JSON.parse(this.city.nativeElement.value)
    }
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
        this.loading = false;
        console.log(error)       
    }
    })
  }
  getAddress(){
    this.httpService.getAddress(this.accessToken)
    .subscribe({ 
      next:(data)=>{
        this.Address = data;
        console.log(this.Address)

       }
    })
    
  }
  getmyOrders(){
    this.httpService.getmyOrders(this.accessToken)
    .subscribe({ 
      next:(data)=>{
        this.myProducts = data;
        console.log(this.myProducts)

       }
    })
  }
initializeAddAddressForm(){
this.addAddressForm = this.formBuilder.group({
    type:['',Validators.required],
    name:['',Validators.required],
    mobile:['', [Validators.required,
    Validators.pattern("^[0-9]{10}$"),
    Validators.minLength(10), Validators.maxLength(10)]],
    address:['',Validators.required],
    landmark:['',Validators.required],
    area:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required],
    pincode:['',Validators.required],
    is_default:['']
})
}
get f(){
  return this.addAddressForm.controls;
}
onSubmit(){
  this.submitted=true;
  if(!this.isEditAddress){
  if(this.addAddressForm.invalid){
    this.addAddressForm.markAllAsTouched();
    return false;
  }else{
    this.addAddressForm.patchValue({country:this.selectedCountry.name,state:this.selectedState.name})
  this.httpService.addAddress(this.accessToken,this.addAddressForm.value).
  subscribe({
    next:(data)=>{
      console.log(data)
      if(data.message==='Address added Successfully'){
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Address added Successfully',
          width: '400px',
        })
        this.getAddress();
        this.isAddNewAddress = false;
      }
    },
    error:(error) => {
      console.log(error)
    }
  })
}}
else if(this.isEditAddress){
  if(this.addAddressForm.invalid){
    this.addAddressForm.markAllAsTouched();
    return false;
  }else{
    this.addAddressForm.patchValue({country:this.selectedCountry.name,state:this.selectedState.name})
    
    this.httpService.editAddress(this.accessToken,this.addAddressForm.value,this.aid).
  subscribe({
    next:(data)=>{
      console.log(data)
      if(data.message === 'Updated Sucessfully'){
        Swal.fire({
          icon: 'success',
          title: 'Done!',
          text: 'Updated Successfully',
          width: '400px',
        })
        this.getAddress();
        this.isAddNewAddress = false;
      }
    },
    error:(error) => {
      console.log(error)
    }
  })
}  
}
}

deleteaddress(aid:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
   if(result.isConfirmed){
    this.httpService.deleteaddress(this.accessToken,aid)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data.message ==='Address Deleted Successful'){
            Swal.fire({
              icon: 'success',
              title: 'Done!',
              text: 'Deleted Successfully',
              width: '400px',
            })
            this.getAddress();
          }
        },
        error:(error)=>{
          this.error = error;
          
          console.log(error) 
      }
    });
   }
  })

}

editaddress(address){
  this.isEditAddress = true;
  this.isAddNewAddress = true;
  const countrys = this.countries.find(item => JSON.stringify(item) === JSON.stringify(address.country));
  this.aid = address.id;
  this.addAddressForm.patchValue({
    type:address.type_id,
    name:address.name,
    mobile:address.mobile,
    address:address.address,
    landmark:address.landmark,
    area:address.area,
    city:address.city,
    state:address.state,
    country:countrys,
    pincode:address.pincode
  })
}
deactivateAccount(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, deactivate!'
  }).then((result) => {
   if(result.isConfirmed){
    this.httpService.deactivateAccount(this.accessToken)
      .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data ==='Account deactivated Successfully'){
            Swal.fire({
              icon: 'success',
              title: 'Done!',
              text: 'Dactivated Successfully',
              width: '400px',
            })
          }
          this.httpService.logout();
        },
        error:(error)=>{
          this.error = error;
          console.log(error) 
      }
    });
   }
  })

}

}
