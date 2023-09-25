import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { User, Userlist, Metrics } from 'src/app/core/models/user';
// import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Dimensions, ImageCroppedEvent, ImageTransform } from '../../image-cropper/interfaces';
// import { base64ToFile } from '../../image-cropper/utils/blob.utils';
import { ImageCropperComponent } from '../../image-cropper/image-cropper.component';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
//page = 1;
// totalItems:any;
// itemsPerPage:number;
// pageNo = 1;

// searchText="";
// isAddProductUrl = false;
// path:any;
// filename:any;
userData: User = new User();
// metrics: Metrics = new Metrics();
// userList=[] as any;
// vendorsList=[] as any;
// ordersList= [] as any;
// salesList= [] as any;
// from_date:string;
// to_date:string;
// price_from:string;
// price_to:string;
//   addProductForm:FormGroup;
//   submitted: boolean;
  accessToken: any;
//   errorMessage: any;
//   loading: boolean;
//   file: any;
//   adminProducts =[] as any;
//   allProducts=[] as any;
  error: any;
//   editProductForm:FormGroup;
//   allproductsFilterForm:FormGroup;
//   ordersFilterForm:FormGroup;
//   allOrdersFilterForm:FormGroup;
//   salesFilterForm:FormGroup;
//   usersFilterForm:FormGroup;
//   vendorFilterForm:FormGroup;
//   imagename:string;
//   imageChangedEvent: any = '';
//   imageuploaded = false;
//   // category:string;
//     croppedImage: any = '';
//     canvasRotation = 0;
//     rotation = 0;
//     scale = 1;
//     showCropper = false;
//     containWithinAspectRatio = false;
//     transform: ImageTransform = {};
//     maxDate:any;
//     next10Days:any;
//     todayDate:any;
//     pickup_date:any;
//     page: number = 1;
//   // count: number = 0;
//   // tableSize: number = 7;
//   // tableSizes: any = [3, 6, 9, 12];
//   category: any ="";
//    product_type: any="";  
//     //filter
//     adminProductfilerEnabled = false;
//     allProductfilerEnabled = false;
//     allordersfilerEnabled = false;
//     myordersfilterEnabled =false;
//     salesfilerEnabled = false;
//     userfilerEnabled = false;
//     vendorfilerEnabled = false;
//     //datefield
//     datefieldEnabled = false;
//     //pricefield
//     pricefieldEnabled = false;
//     length="";
//     width="";
//     height="";
// @ViewChild(ImageCropperComponent) imageCropper:ImageCropperComponent;
// @ViewChild('pickupModalLabel') pickupModalLabel : any;
//   shipment_id: any;

constructor(private route: ActivatedRoute,private formBuilder:FormBuilder,
  private router: Router,private httpService:AuthenticationService,private modalService: NgbModal, datepipe:DatePipe,
  private toasterService:ToastrService){
// const currentUrl = this.router.url;
// if(currentUrl.includes('admin/addproduct')){
//   this.isAddProductUrl = true;
// }else{
//   this.isAddProductUrl = false;
// }
// this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");
// this.next10Days=datepipe.transform(new Date(),"yyyy-MM-dd")
// // let date = n
// this.todayDate=datepipe.transform(new Date(),"yyyy-MM-dd")
  }
ngOnInit(){
 
  this.getUserDetails();
 
}
logoutfromDashboard(){
  this.httpService.logout();
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
