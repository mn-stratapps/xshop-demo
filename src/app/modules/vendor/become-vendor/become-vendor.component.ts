import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { TeamSlider, TestimonialSlider } from 'src/app/shared/data/slider';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-become-vendor',
  templateUrl: './become-vendor.component.html',
  styleUrls: ['./become-vendor.component.scss']
})
export class BecomeVendorComponent implements OnInit {
  Step1 =true;
  Step2 =false;
  Step3 = false;
  imagePreviews: (string | null)[] = ['', '', '', ''];
  submitted=false;
  accessToken:any;
  vendorEmail=false;
  mobileShow=false;
  companyDetails: FormGroup;
  emailOtpform:FormGroup;
  vendorMobileForm:FormGroup;
  vendorAddressForm:FormGroup;
  vendorAccountDetailsForm:FormGroup;
  selectedFile: File;
  filename:string;
  accountNumberError=false;
  // Define an array of label texts
  labelArray: string[] = ['Image 1', 'Image 2', 'Image 3', 'Image 4' , 'Image 5', 'Image 6', 'Image 7' , 'Image 8'];
  IndiaStates:Array<any>=[{name: 'Andhra Pradesh'},{name:'Arunachal Pradesh'},{name:'Assam'},{name:'Bihar'},{name:'Chhattisgarh'},{name:'Goa'},{name:'Gujarat'},{name:'Haryana'},{name:'Himachal Pradesh'},{name:'Jharkhand'},{name:'Karnataka'},{name:'Kerala'}
     ,{name:'Madhya Pradesh'},{name:'Maharashtra'},{name:'Manipur'},{name:'Meghalaya'},{name:'Mizoram'},{name:'Nagaland'},{name:'Odisha'},{name:'Punjab'},{name:'Rajasthan'},{name:'Sikkim'},{name:'Tamil Nadu'},{name:'Telangana'},{name:'Tripura'},{name:'Uttar Pradesh'}
    ,{name:'Uttarakhand'},{name:'West Bengal'}];

  
  constructor(private formBuilder:FormBuilder,private httpservice:AuthenticationService,public router:Router) {
    
    const currentUser = localStorage.getItem( 'currentUser' )
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];  
     }else{
      this.router.navigate(['/core/login']);
    }
     }

  ngOnInit() {
    this.vendorData();
    this.initializeCompanyDetailsForm();
    this.initializeEmailOtpFrom();
    this.initializevendorMobile();
    this.initializevendorAddressForm();
    this.initializeAccountDetails();
  }

  vendorData(){
    this.httpservice.vendorData(this.accessToken)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data?.step_1 === "True"){
            this.Step1 = false;
            this.Step2 = true;

          }else if(data?.step_2 === "True"){
            this.Step2 = false;
            this.Step3 = true;
          }else if(data?.step_1 ==="False"){
            this.Step1 = true;
          }
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }

  // step3(){
  //   this.Step2=false;
  //   this.Step3=true;
  // }

  initializeCompanyDetailsForm(){
    this.companyDetails = this.formBuilder.group({
     org_name:['',[Validators.required]],
     email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  });
  }
  initializeEmailOtpFrom(){
    this.emailOtpform = this.formBuilder.group({
     otp: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
  initializevendorMobile(){
    this.vendorMobileForm = this.formBuilder.group({
       mobile:['', [Validators.required,
        Validators.pattern("^[0-9]{10}$"),
        Validators.minLength(10), Validators.maxLength(10)]]
    })
  }
  initializevendorAddressForm(){
    this.vendorAddressForm = this.formBuilder.group({
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required,Validators.pattern("^[0-9]{6}$$")]],
      country:['',[Validators.required]]

    })
  }
  initializeAccountDetails(){
    this.vendorAccountDetailsForm = this.formBuilder.group({
      businesstype:['',[Validators.required]],
      category:['',[Validators.required]],
      subcategory:['',[Validators.required]],
      description:['',[Validators.required]],
      businesspan:['',[Validators.required,Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]{1}$")]],
      gst:['',[Validators.required,Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9A-Z]{1}$")]],
      cin:['',[Validators.required,Validators.pattern("^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$")]],
      supportemail:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      supportmobile:['',[Validators.required,Validators.pattern("^[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]],
      businessurl:['',[Validators.required]],
      personalpan:['',[Validators.required]],
      accountno:['',[Validators.required,Validators.pattern("^[0-9]{9,18}$")]],
      re_enteraccountno:['',[Validators.required]],
      ifsc_code:['',[Validators.required,Validators.pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
      benificiaryname:['',[Validators.required]],
      businesspanfile:['',[Validators.required]],
      gstfile:['',[Validators.required]],
      businessprooffile:['',[Validators.required]],
      bankfile:['',[Validators.required]],

    })
  }
  get f(){
    return this.companyDetails.controls;
  }
  get fv() {
    return this.emailOtpform.controls;
  }
  get vm() {
    return this.vendorMobileForm.controls;
  }
  get va(){
    return this.vendorAddressForm.controls;
  }
  get vaf(){
    return this.vendorAccountDetailsForm.controls;
  }
  checkAccountNumber(){
    if(this.vendorAccountDetailsForm.value.re_enteraccountno === this.vendorAccountDetailsForm.value.accountno){
      this.accountNumberError = false;
    } else{
      this.accountNumberError = true;
    }

  }
  emailInput(event){
  if(this.companyDetails.valid){
  }
  }

  emailVerify(){
  this.submitted= true;
  this.httpservice.vendorEmailVerify(this.accessToken,this.companyDetails.value)
  .subscribe(
    {
      next:(data) => {
        console.log(data);
        if(data.status="200"){
          this.vendorEmail= true;
          this.httpservice.emailActivationToken = data.id;
        }
      },
      error:(error)=>{
        console.log(error);
      }
    }
  )
  }
  emailOtpVerify(){
    this.httpservice.vendorEmailOtpVerify(this.emailOtpform.value)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data.message === 'Email OTP validated'){
            Swal.fire({
              icon: 'success',
              title: 'Congratulations!',
              text: 'Your Email validated Successfully',
              width: '400px',
            })
            this.vendorEmail= false;
            this.emailOtpform.reset();
          }
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }
  mobileVerify(){
    this.httpservice.vendorMobileVerify(this.accessToken,this.vendorMobileForm.value)
    .subscribe(
      {
        next:(data:any) => {
          console.log(data);
          if(data.status ='200'){
            this.httpservice.emailActivationToken = data.id;
          this.mobileShow = true;
          }
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }
  verifyMobileOtp(){
    this.httpservice.vendorMObileOtpVerify(this.emailOtpform.value)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data.message === 'Mobile OTP validated'){
            Swal.fire({
              icon: 'success',
              title: 'Congratulations!',
              text: 'Your Mobile validated Successfully',
              width: '400px',
            })
            this.mobileShow= false;
            this.emailOtpform.reset();
          }
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }
  businessDetails(){
    this.submitted=true;
    if(this.vendorAddressForm.invalid){
      return false;
    }else{
    this.httpservice.vendorAddress(this.accessToken,this.vendorAddressForm.value)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data.response = 200){
            Swal.fire({
              icon: 'success',
              title: 'Congratulations!',
              text: 'Address added Successfully',
              width: '400px',
            })
            this.Step1=false;
            this.Step2=true;          }
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )   
    }
  }

  vendorAccountDetailsApi(){
    var formData:any = new FormData();
      formData.append("businesstype",this.vendorAccountDetailsForm.get('businesstype').value);
      formData.append("description",this.vendorAccountDetailsForm.get('description').value);
      formData.append("businesspan",this.vendorAccountDetailsForm.get('businesspan').value);
      formData.append("gst",this.vendorAccountDetailsForm.get('gst').value);
      formData.append("cin",this.vendorAccountDetailsForm.get('cin').value);
      formData.append("supportemail",this.vendorAccountDetailsForm.get('supportemail').value);
      formData.append("supportmobile",this.vendorAccountDetailsForm.get('supportmobile').value);
      formData.append("businessurl",this.vendorAccountDetailsForm.get('businessurl').value);
      formData.append("personalpan",this.vendorAccountDetailsForm.get('personalpan').value);
      formData.append("accountno",this.vendorAccountDetailsForm.get('accountno').value);
      formData.append("re_enteraccountno",this.vendorAccountDetailsForm.get('re_enteraccountno').value);
      formData.append("ifsc_code", this.vendorAccountDetailsForm.get('ifsc_code').value);
      formData.append("benificiaryname", this.vendorAccountDetailsForm.get('benificiaryname').value);
      formData.append("businesspanfile",this.vendorAccountDetailsForm.get('businesspanfile').value); 
      formData.append("gstfile",this.vendorAccountDetailsForm.get('gstfile').value); 
      formData.append("businessprooffile",this.vendorAccountDetailsForm.get('businessprooffile').value); 
      formData.append("bankfile",this.vendorAccountDetailsForm.get('bankfile').value); 

    this.httpservice.vendorAccoundDetailsAdd(this.accessToken,formData)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )  
  }

  onSelectFile(event: any, index: number) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]);
  
        reader.onload = (e) => {
          this.imagePreviews[index] = e.target?.result as string;
        };
        this.selectedFile = event.target.files[0];
        // console.log(event.target.files[0])
        // const formData = new FormData();
        // let fileObj:any;
        // fileObj = this.httpservice.convertBase64ToFileObject(this.selectedFile);
        // fileObj = this.httpservice.blobToFile(fileObj);
        // const obj= {path : fileObj} 
        // this.addProductForm.patchValue(obj)
        // console.log(obj.path.name);
        // this.filename = obj.path.name
        if(index == 5){
          const obj= {businesspanfile : this.selectedFile} 
          this.vendorAccountDetailsForm.patchValue(obj) 
          console.log('business pan',obj)             
        }
        if(index == 6){
          const obj= {gstfile : this.selectedFile} 
          this.vendorAccountDetailsForm.patchValue(obj)
          console.log('gstfile',obj)
        }
        if(index == 7){
          const obj= {businessprooffile : this.selectedFile} 
          this.vendorAccountDetailsForm.patchValue(obj)
          console.log('businessprofile',obj)
     
        }
        if(index == 8){
          const obj= {bankfile : this.selectedFile} 
          this.vendorAccountDetailsForm.patchValue(obj)
          console.log('bankfile',obj)
        }
      }
    }
  
    clearImage(index: number) {
      this.imagePreviews[index] = '';
    
    }


  //   public TeamSliderConfig: any = TeamSlider;
  // public TestimonialSliderConfig: any = TestimonialSlider;

  // Testimonial Carousel
  // public testimonial = [{
  //   image: 'assets/images/testimonial/1.jpg',
  //   name: 'Mark jkcno',
  //   designation: 'Designer',
  //   description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  // }, {
  //   image: 'assets/images/testimonial/2.jpg',
  //   name: 'Adegoke Yusuff',
  //   designation: 'Content Writer',
  //   description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  // }, {
  //   image: 'assets/images/testimonial/1.jpg',
  //   name: 'John Shipmen',
  //   designation: 'Lead Developer',
  //   description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  // }]

  // Team 
//   public team = [{
//     image: 'assets/images/team/1.jpg',
//     name: 'Mark jkcno',
//     designation: 'Designer'
//   }, {
//     image: 'assets/images/team/2.jpg',
//     name: 'Adegoke Yusuff',
//     designation: 'Content Writer'
//   }, {
//     image: 'assets/images/team/3.jpg',
//     name: 'John Shipmen',
//     designation: 'Lead Developer'
//   }, {
//     image: 'assets/images/team/4.jpg',
//     name: 'Hileri Keol',
//     designation: 'CEO & Founder at Company'
//   }, {
//     image: 'assets/images/team/3.jpg',
//     name: 'John Shipmen',
//     designation: 'Lead Developer'
//  }]




}
