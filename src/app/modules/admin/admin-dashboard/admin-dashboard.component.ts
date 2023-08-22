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
totalItems:any;
itemsPerPage:number;
pageNo = 1;

searchText="";
isAddProductUrl = false;
path:any;
filename:any;
userData: User = new User();
metrics: Metrics = new Metrics();
userList=[] as any;
vendorsList=[] as any;
ordersList= [] as any;
salesList= [] as any;
from_date:string;
to_date:string;
price_from:string;
price_to:string;
  addProductForm:FormGroup;
  submitted: boolean;
  accessToken: any;
  errorMessage: any;
  loading: boolean;
  file: any;
  adminProducts =[] as any;
  allProducts=[] as any;
  error: any;
  editProductForm:FormGroup;
  allproductsFilterForm:FormGroup;
  ordersFilterForm:FormGroup;
  allOrdersFilterForm:FormGroup;
  salesFilterForm:FormGroup;
  usersFilterForm:FormGroup;
  vendorFilterForm:FormGroup;
  imagename:string;
  imageChangedEvent: any = '';
  imageuploaded = false;
  // category:string;
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
    maxDate:any;
    next10Days:any;
    todayDate:any;
    pickup_date:any;
    page: number = 1;
  // count: number = 0;
  // tableSize: number = 7;
  // tableSizes: any = [3, 6, 9, 12];
  category: any ="";
   product_type: any="";  
    //filter
    adminProductfilerEnabled = false;
    allProductfilerEnabled = false;
    allordersfilerEnabled = false;
    myordersfilterEnabled =false;
    salesfilerEnabled = false;
    userfilerEnabled = false;
    vendorfilerEnabled = false;
    //datefield
    datefieldEnabled = false;
    //pricefield
    pricefieldEnabled = false;
    length="";
    width="";
    height="";
@ViewChild(ImageCropperComponent) imageCropper:ImageCropperComponent;
@ViewChild('pickupModalLabel') pickupModalLabel : any;
  shipment_id: any;

constructor(private route: ActivatedRoute,private formBuilder:FormBuilder,
  private router: Router,private httpService:AuthenticationService,private modalService: NgbModal, datepipe:DatePipe,
  private toasterService:ToastrService){
// const currentUrl = this.router.url;
// if(currentUrl.includes('admin/addproduct')){
//   this.isAddProductUrl = true;
// }else{
//   this.isAddProductUrl = false;
// }
this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");
this.next10Days=datepipe.transform(new Date(),"yyyy-MM-dd")
// let date = n
this.todayDate=datepipe.transform(new Date(),"yyyy-MM-dd")
  }
ngOnInit(){
  this.getdsahboardCount();
  this.getUserDetails();
  this.initializeAddProductForm();
  this.initializeeditProductForm();
  // this.getOrdersList();
  this.allproductsFilter();
  this.ordersListFilter();
  this.allOrdersListFilter();
  this.salesFilter();
  this.usersFilter();
  this.vendorFilter();
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
getdsahboardCount(){
  const currentUser = localStorage.getItem( 'currentUser' );
  this.accessToken = JSON.parse( currentUser )['Token'];
  this.httpService.getadmindashboardCount(this.accessToken)
  .subscribe({
    next:(data) =>{
      this.metrics = data;
    },
    error:(error)=>{
      this.error = error;
      
      console.log(error)       
  }
  })
}

usersPageChange(page:any){
 this.pageNo = page;
 this.getUsersList();
}
resetUsersFilters(){
  // this.userfilerEnabled = !this.userfilerEnabled;
  this.pageNo = 1;
  this.searchText="";
  this.usersFilterForm.reset();
  this.getUsersList();
}
usersSearchEvent(event:any){
  this.pageNo = 1;
  this.getUsersList();
}
getUsersList(){
  this.usersFilterForm.patchValue({email:this.searchText,pageno:this.pageNo})
 let formusersObj = this.usersFilterForm.getRawValue();
 if(formusersObj.is_active == '' || formusersObj.is_active == null){
  delete formusersObj.is_active;
 }
 if(formusersObj.from_date == '' || formusersObj.from_date == null){
  delete formusersObj.from_date;
 }
 if(formusersObj.to_date == '' || formusersObj.to_date == null){
  delete formusersObj.to_date;
 }
 if(formusersObj.email == '' || formusersObj.email == null){
  delete formusersObj.email;
 }
  this.httpService.getUserslist(formusersObj,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.userList = data.users_data;
      this.totalItems = data.total_products;
      this.itemsPerPage = data.products_per_page;
       console.log(this.userList);
    },
    error:(error)=>{
      this.error = error;
       console.log(error)  
       if(error.error.message === 'From date should be less than To date'){
        this.toasterService.warning('Date range mismatched!, Please select correct date');    
       } 
  }
  }) 
}
vendorPageChange(page:any){
  this.pageNo = page;
  this.getVendorList();
}
resetVendorFilters(){
  // this.vendorfilerEnabled = !this.vendorfilerEnabled;
  this.pageNo = 1;
  this.searchText="";
  this.vendorFilterForm.reset();
  this.getVendorList();
}
vendorsSearchEvent(event:any){
  this.pageNo = 1;
  this.getVendorList();
}
getVendorList(){
  this.vendorFilterForm.patchValue({org_name:this.searchText,pageno:this.pageNo})
let formVendorObj = this.vendorFilterForm.getRawValue();
if(formVendorObj.is_active =='' || formVendorObj.is_active == null){
  delete formVendorObj.is_active;
}
if(formVendorObj.tax_status =='' || formVendorObj.tax_status == null){
  delete formVendorObj.tax_status;
}
if(formVendorObj.from_date =='' || formVendorObj.from_date == null){
  delete formVendorObj.from_date;
}
if(formVendorObj.to_date =='' || formVendorObj.to_date == null){
  delete formVendorObj.to_date;
}
if(formVendorObj.org_name =='' || formVendorObj.org_name == null){
  delete formVendorObj.org_name;
}
  this.httpService.getVendorslist(formVendorObj,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.vendorsList = data.vendors_data;
      this.totalItems = data.total_products;
      this.itemsPerPage = data.products_per_page;
       console.log(this.vendorsList);
    },
    error:(error)=>{
      this.error = error;  
      console.log(error)   
      if(error.error.message === 'From date should be less than To date'){
        this.toasterService.warning('Date range mismatched!, Please select correct date');    
       }     
  }
  }) 
}
//all orders///
allOrdersPageChange(page:any){
 this.pageNo = page;
 this.getAllOrdersList();
}
resetAllOrdersFilters(){
  // this.ordersfilerEnabled = !this.ordersfilerEnabled;
  this.pageNo = 1;
  this.searchText="";
  this.allOrdersFilterForm.reset();
  this.getAllOrdersList();
}
allOrdersSearchEvent(event:any){
  this.pageNo = 1;
  this.getAllOrdersList();
}
getAllOrdersList(){
  this.allOrdersFilterForm.patchValue({order_id:this.searchText,pageno:this.pageNo})
  let formOrdersObj = this.allOrdersFilterForm.getRawValue();
  if(formOrdersObj.payment_status == '' || formOrdersObj.payment_status == null){
    delete formOrdersObj.payment_status
  }
  if(formOrdersObj.order_status == '' || formOrdersObj.order_status == null){
    delete formOrdersObj.order_status
  }
  if(formOrdersObj.shipment_status == '' || formOrdersObj.shipment_status == null){
    delete formOrdersObj.shipment_status
  }
  if(formOrdersObj.from_date == '' || formOrdersObj.from_date == null){
    delete formOrdersObj.from_date
  }
  if(formOrdersObj.to_date == '' || formOrdersObj.to_date == null){
    delete formOrdersObj.to_date
  }
  if(formOrdersObj.order_id == '' || formOrdersObj.order_id === null){
    delete formOrdersObj.order_id;
  }
  this.httpService.getAllOrdersList(formOrdersObj,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.ordersList = data.all_orders_data;
      this.totalItems = data.total_products;
      this.itemsPerPage = data.products_per_page;
       console.log(this.ordersList);
    },
    error:(error)=>{
      this.error = error;
      console.log(error)     
      if(error.error.message === 'From date should be less than To date'){
        this.toasterService.warning('Date range mismatched!, Please select correct date');    
       }   
  }
  }) 
}
//my orders//
myOrdersPageChange(page:any){
  this.pageNo = page;
  this.getMyOrdersList();
 }
 resetMyOrdersFilters(){
   // this.ordersfilerEnabled = !this.ordersfilerEnabled;
   this.pageNo = 1;
   this.searchText="";
   this.ordersFilterForm.reset();
   this.getMyOrdersList();
 }
 myOrdersSearchEvent(event:any){
   this.pageNo = 1;
   this.getMyOrdersList();
 }
 getMyOrdersList(){
   this.ordersFilterForm.patchValue({order_id:this.searchText,pageno:this.pageNo})
   let formOrdersObj = this.ordersFilterForm.getRawValue();
   if(formOrdersObj.payment_status == '' || formOrdersObj.payment_status == null){
     delete formOrdersObj.payment_status
   }
   if(formOrdersObj.order_status == '' || formOrdersObj.order_status == null){
     delete formOrdersObj.order_status
   }
   if(formOrdersObj.shipment_status == '' || formOrdersObj.shipment_status == null){
    delete formOrdersObj.shipment_status
  }
   if(formOrdersObj.from_date == '' || formOrdersObj.from_date == null){
     delete formOrdersObj.from_date
   }
   if(formOrdersObj.to_date == '' || formOrdersObj.to_date == null){
     delete formOrdersObj.to_date
   }
   if(formOrdersObj.order_id == '' || formOrdersObj.order_id === null){
     delete formOrdersObj.order_id;
   }
   this.httpService.getMyOrdersList(formOrdersObj,this.accessToken)
   .subscribe({
     next:(data) =>{
       this.ordersList = data.my_orders_data;
       this.totalItems = data.total_products;
       this.itemsPerPage = data.products_per_page;
        console.log(this.ordersList);
     },
     error:(error)=>{
       this.error = error;
       console.log(error)     
       if(error.error.message === 'From date should be less than To date'){
         this.toasterService.warning('Date range mismatched!, Please select correct date');    
        }   
   }
   }) 
 }

salesPageChange(page:any){
  this.pageNo = page;
  this.getSales();
}
resetSalesFilters(){
  // this.salesfilerEnabled = !this.salesfilerEnabled;
  this.pageNo=1;
  this.salesFilterForm.reset();
  this.getSales();
}
salesSearchEvent(event:any){
  this.pageNo = 1;
  this.getSales();
}
getSales(){
  this.salesFilterForm.patchValue({transaction_id:this.searchText,pageno:this.pageNo})
 let formSalesObj = this.salesFilterForm.getRawValue()
 if(formSalesObj.delivery_status == '' || formSalesObj.delivery_status == null){
  delete formSalesObj.delivery_status
  }
 if(formSalesObj.from_date == '' || formSalesObj.from_date == null){
  delete formSalesObj.from_date
  }
 if(formSalesObj.to_date == '' || formSalesObj.to_date == null){
  delete formSalesObj.to_date
  }
  if(formSalesObj.transaction_id == '' || formSalesObj.transaction_id == null){
    delete formSalesObj.transaction_id
    }

  this.httpService.getSalesList(formSalesObj,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.salesList = data.sales_data;
      this.totalItems = data.total_products;
      this.itemsPerPage = data.products_per_page;
      console.log(this.salesList);
    },
    error:(error)=>{
      this.error = error;  
      console.log(error);
      if(error.error.message === 'From date should be less than To date'){
        this.toasterService.warning('Date range mismatched!, Please select correct date');    
       }       
  }
  }) 
}
allproductsFilter(){
this.allproductsFilterForm = this.formBuilder.group({
category :[null],
type :[null],
price_from:[''],
price_to:[''],
from_date:[''],
to_date :[''],
name:[''],
pageno:['']
})
}
allOrdersListFilter(){
  this.allOrdersFilterForm = this.formBuilder.group({
  payment_status:[null],
  order_status:[null],
  shipment_status:[null],
  from_date:[''],
  to_date:[''],
  order_id:[''],
  pageno:['']
  })
}
ordersListFilter(){
  this.ordersFilterForm = this.formBuilder.group({
  payment_status:[null],
  order_status:[null],
  shipment_status:[null],
  from_date:[''],
  to_date:[''],
  order_id:[''],
  pageno:['']
  })
}
salesFilter(){
  this.salesFilterForm = this.formBuilder.group({
    delivery_status:[null],
    from_date:[''],
    to_date:[''],
    transaction_id:[''],
    pageno:['']
  })
}
usersFilter(){
this.usersFilterForm = this.formBuilder.group({
   is_active:[null],
   from_date:[''],
   to_date:[''],
   email:[''],
   pageno:['']
})
}
vendorFilter(){
this.vendorFilterForm = this.formBuilder.group({
  is_active:[null],
  tax_status:[null],
  from_date:[''],
  to_date:[''],
  org_name:[''],
  pageno:['']

})
}
initializeAddProductForm(){
  this.addProductForm=this.formBuilder.group({
    category:['',Validators.required],//mobiles,laptaps,watches
    title:['',Validators.required],
    description:['',Validators.required],
    quantity:['',Validators.required],
    price:['',Validators.required],
    discount:['',Validators.required],
    path:[''],
    type:['',Validators.required],//electronics,gadgets,accessories
    brand:['',Validators.required],
    sale:[''],//radiobutton
    new:[''],//radiobutton
    collection:['',Validators.required],//radio
    // size:[''],
    color:[''], 
    weight:[''],
    dimensions:['']
  });
}
initializeeditProductForm(){
  this.editProductForm=this.formBuilder.group({
    id:[''],
    category:[''],
    title:[''],
    description:[''],
    price:[''],
    discount:[''],
    dimensions:[''],
    weight:['']
  })
}
get f(){
  return this.addProductForm.controls;
}
addNewProduct(){
  this.isAddProductUrl = !this.isAddProductUrl;
  this.submitted=false;
}
addProduct(){
  this.submitted=true;
  if(this.addProductForm.invalid){
    this.addProductForm.markAllAsTouched();
      return false;
  }else{
    this.submitted=true; 
    this.addProductForm.patchValue({dimensions:this.length+"X"+this.width+"X"+this.height}) 
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    console.log('patchvalue',this.addProductForm.get('path'));
    var formData:any = new FormData();
    formData.append("category",this.addProductForm.get('category').value);
    formData.append("title",this.addProductForm.get('title').value);
    formData.append("description",this.addProductForm.get('description').value);
    formData.append("price",this.addProductForm.get('price').value);
    formData.append("discount",this.addProductForm.get('discount').value);
    formData.append("type",this.addProductForm.get('type').value);
    formData.append("brand",this.addProductForm.get('brand').value);
    formData.append("sale",this.addProductForm.get('sale').value);
    formData.append("new",this.addProductForm.get('new').value);
    formData.append("collection",this.addProductForm.get('collection').value);
    formData.append("color",this.addProductForm.get('color').value);
    formData.append("path", this.addProductForm.get('path').value, this.imagename);
    formData.append("quantity",this.addProductForm.get('quantity').value); 
    formData.append("weight",this.addProductForm.get('weight').value);
    formData.append("dimensions",this.addProductForm.get('dimensions').value);
  this.httpService.addProduct(this.accessToken,formData)
  .subscribe(
    {
      next:(data) => {
        console.log(data);
        if(data.message =='Product Added successfully'){
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'Product Added Successfully',
            width: '400px',
          })
          this.viewAdminProducts();
          this.isAddProductUrl=false;
          this.editProductForm.reset();
          this.addProductForm.reset();
        }
      },
      error:(error)=>{
        this.errorMessage = error;
        this.loading = false;
    }
  });
}
}

callimage(type:string){
  const reader = new FileReader();
  if (File.length === 0) return;
  let obj:any;
  if(type=='1')  {
   obj= {path : this.file} 
  this.addProductForm.patchValue(obj)
   console.log('file',this.file) 
  }
  // else if(type=='2'){
  //   obj ={image2 : this.file}
  // }else if(type=='3'){
  //   obj ={image3 : this.file}
  // }
  this.addProductForm.patchValue(obj)
  if(!this.file)return
  reader.readAsDataURL(this.file);
  reader.onload = _event => {
    if(type=='1')  {
    this.path = reader.result as string;
    // console.log(this.image1)
    }
    // else if(type=='2'){
    // this.image2 = reader.result as string;
    // }else if(type=='3'){
    // this.image3 = reader.result as string;
    // }
  };
  console.log(obj);
}
// onFileUpdate(event:any, type:string) {
//   this.imageChangedEvent = event;
//    const files = event.target.files[0];
//   const reader = new FileReader();
//    this.file = event.target.files[0];   
// this.file=base64ToFile(this.croppedImage)
// let croppedFile = this.croppedImage;
// croppedFile = this.httpService.convertBase64ToFileObject(croppedFile);
//  croppedFile = this.httpService.blobToFile(croppedFile);
//  const obj= {path : croppedFile} 
//  this.addProductForm.patchValue(obj)
// console.log(obj)

//   // this.callimage(type);
// }
onFileUpdate(event,type:string){
  const image:any = new Image();
  const file:File = event.target.files[0];
  const isSupportfile = file.type;
  if (isSupportfile === 'image/jpg' || isSupportfile === 'image/jpeg' || isSupportfile === 'image/webp' || isSupportfile === 'image/png') {
      this.imageChangedEvent = event;
  } else {
    this.showCropper = false;
  }
}
saveImage(){
  if(this.croppedImage!=""){
    // this.loadingcrop = true;
    let fileObj:any;
    fileObj = this.httpService.convertBase64ToFileObject(this.croppedImage);
    fileObj = this.httpService.blobToFile(fileObj);
    const obj= {path : fileObj} 
    this.addProductForm.patchValue(obj)
    console.log(obj.path.name);
    this.imagename = obj.path.name
    this.imageuploaded = true;
}
}
// fileChangeEvent(event: any): void {
//   this.imageChangedEvent = event;
// }

////image-cropper//
imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;

  //console.log(event,base64ToFile(event.base64));
}

imageLoaded() {
  this.showCropper = true;
  console.log('Image loaded');
}

cropperReady(sourceImageDimensions: Dimensions) {
  console.log('Cropper ready', sourceImageDimensions);
}

loadImageFailed() {
  console.log('Load failed');
}

rotateLeft() {
  this.canvasRotation--;
  this.flipAfterRotate();
}

rotateRight() {
  this.canvasRotation++;
  this.flipAfterRotate();
}

private flipAfterRotate() {
  const flippedH = this.transform.flipH;
  const flippedV = this.transform.flipV;
  this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
  };
}


flipHorizontal() {
  this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
  };
}

flipVertical() {
  this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
  };
}

resetImage() {
  this.scale = 1;
  this.rotation = 0;
  this.canvasRotation = 0;
  this.transform = {};
}

zoomOut() {
  this.scale -= .1;
  this.transform = {
      ...this.transform,
      scale: this.scale
  };
}

zoomIn() {
  this.scale += .1;
  this.transform = {
      ...this.transform,
      scale: this.scale
  };
}

toggleContainWithinAspectRatio() {
  this.containWithinAspectRatio = !this.containWithinAspectRatio;
}

updateRotation() {
  this.transform = {
      ...this.transform,
      rotate: this.rotation
  };
}
//image-cropper-end//
adminProdsPageChange(page:any){
this.pageNo = page;
this.viewAdminProducts();
}
resetAdminFilters(){
//  this.adminProductfilerEnabled = !this.adminProductfilerEnabled;
  this.searchText="";
  this.allproductsFilterForm.reset();
  this.pageNo = 1;
  this.viewAdminProducts();
}
adminproductsSearchEvent(event: any){
  this.pageNo = 1;
  this.viewAdminProducts();
  }
viewAdminProducts(){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];    
    this.allproductsFilterForm.patchValue({name:this.searchText,pageno:this.pageNo})
    let formadminproductsObj = this.allproductsFilterForm.getRawValue();
    if(formadminproductsObj.category == '' || formadminproductsObj.category === null  ){
      delete formadminproductsObj.category;
    }
    if(formadminproductsObj.type == '' || formadminproductsObj.type === null){
      delete formadminproductsObj.type;
    }
    if(formadminproductsObj.price_from == '' || formadminproductsObj.price_from === null ){
      delete formadminproductsObj.price_from;
    }
    if(formadminproductsObj.price_to == '' || formadminproductsObj.price_to === null ){
      delete formadminproductsObj.price_to;
    }
    if(formadminproductsObj.from_date == '' || formadminproductsObj.from_date === null ){
      delete formadminproductsObj.from_date;
    }
    if(formadminproductsObj.to_date == '' || formadminproductsObj.to_date === null ){
      delete formadminproductsObj.to_date;
    }
    if(formadminproductsObj.name == '' || formadminproductsObj.name === null){
      delete formadminproductsObj.name;
    }
  this.httpService.viewAdminProducts(formadminproductsObj,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.adminProducts = data?.adminproducts_data;
      this.totalItems = data?.total_products;
      this.itemsPerPage = data?.products_per_page;
       console.log(this.adminProducts);
    },
    error:(error)=>{
      this.error = error;      
      console.log(error)  
      // if(error.error.message === 'Details Not Found') {
      //   Swal.fire({
      //     icon: 'warning',
      //     title: 'No Data!',
      //     text: 'No Products found Please Add products',
      //     width: '400px',
      //   })
      //   this.isAddProductUrl = true;
      // } 
      if(error.error.message === 'From date should be less than To date'){
        this.toasterService.warning('Date range mismatched!, Please select correct date');    
       }    
  }
  })
}
openModal(exampleModalLabel, products){
  this.modalService.open(exampleModalLabel,);
this.editProductForm.patchValue({
  id:products.id,
  category:products.category,
  title:products.title,
  description:products.description,
  price:products.price,
  discount:products.discount,
  weight:products.weight,
})
}
editProduct(){
  this.editProductForm.patchValue({dimensions:this.length+"X"+this.width+"X"+this.height}) 
   this.httpService.editProductByAdmin(this.accessToken,this.editProductForm.value.id,this.editProductForm.value)
   .subscribe(
    {
      next:(data) => {
        console.log(data);
        if(data.message ==='Product Details Updated successfully'){
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'Updated Product Successfully',
            width: '400px',
          })
        }
        this.viewAdminProducts();
      },
      error:(error)=>{
        this.error = error;  
        console.log(error);
        if(error.error.message === 'From date should be less than To date'){
          this.toasterService.warning('Date range mismatched!, Please select correct date');    
         }
    }
  });
  this.modalService.dismissAll();
}
resetAllProductsFilters(){
// this.allProductfilerEnabled = !this.allProductfilerEnabled
this.searchText="";
this.allproductsFilterForm.reset();
this.pageNo=1;
this.viewAllProducts();
}
allproductsSearchEvent(event: any){
  this.pageNo = 1;
  this.viewAllProducts();
}
allProdsPageChange(page:any){
  this.pageNo = page;
  this.viewAllProducts();
}
viewAllProducts(){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    // if(this.allproductsFilterForm.get('category').value == ''){
    //   this.allproductsFilterForm.get('category').disable();
    this.allproductsFilterForm.patchValue({name:this.searchText,pageno:this.pageNo})
    let formObj = this.allproductsFilterForm.getRawValue();
    if(formObj.category == '' || formObj.category === null ){
      delete formObj.category;
    }
    if(formObj.type == '' || formObj.type === null ){
      delete formObj.type;
    }
    if(formObj.price_from == '' ||formObj.price_from === null){
      delete formObj.price_from;
    }
    if(formObj.price_to == '' || formObj.price_to === null){
      delete formObj.price_to;
    }
    if(formObj.from_date == '' || formObj.from_date === null){
      delete formObj.from_date;
    }
    if(formObj.to_date == '' || formObj.to_date === null){
      delete formObj.to_date;
    }
    if(formObj.name == '' || formObj.name === null){
      delete formObj.name;
    }
    
  this.httpService.viewAllProducts(formObj,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.allProducts = data?.products_data;
      this.totalItems = data?.total_products;
      this.itemsPerPage = data?.products_per_page;
       console.log(this.allProducts);
    },
    error:(error)=>{
      this.error = error;
      console.log(error)  
      if(error.error.message === 'From date should be less than To date'){
        this.toasterService.warning('Date range mismatched!, Please select correct date');    
       }    
  }
  })
}
deleteProductByAdmin(id:any){
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
    this.httpService.deleteProductsByAdmin(this.accessToken,id)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          if(data.message =='Product Removed Successfully'){
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Deleted Product Successfully',
              width: '400px',
            })
          }
          this.viewAdminProducts();
        },
        error:(error)=>{
          this.error = error;          
          console.log(error) 
      }
    });
    this.modalService.dismissAll();
   }
  })
}
shipmentAction(oid:any,status:any,shipment_id:any,shipment_action:any){
if(shipment_action === "SHIP NOW"){
  this.httpService.shipNow(this.accessToken,oid)
    .subscribe(
    {
      next:(data:any) => {
        console.log(data);
        // this.Pickup(data.shipment_id);
        this.shipment_id=data.data[0].shipment_id
        this.modalService.open(this.pickupModalLabel)

      },
      error:(error)=>{
        this.error = error;        
        console.log(error) 
    }
  });

}
if(shipment_action ==="PICKUP"){
  this.modalService.open(this.pickupModalLabel)
  this.shipment_id=shipment_id;
}
if(status === "PICKUP SCHEDULED"){

}
if(status === "IN TRANSIT"){}
if(status === "DELIVERED"){}
}
schedulepickup(){
  const obj ={
    'pickup_date': this.pickup_date,
  }
this.httpService.pickUp(this.accessToken,this.shipment_id,obj)
.subscribe(
  {
    next:(data) => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        text: data.message,
      })
      this.viewAdminProducts();
    },
    error:(error)=>{
      this.error = error;        
      console.log(error) 
  }
});
}
downloadInvoices(shipment_id,value:any){
  if(value.target.value ==='DOWNLOAD INVOICE'){ 
      this.httpService.downloadInvoice(this.accessToken,shipment_id)
      .subscribe(
        {
          next:(data) => {
            Swal.fire({
              title: 'Download Invoice',
              text: "Do you want to download Invoice",
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },        
              icon:'question',    
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes'
            }).then((result) => {
              if(result.isConfirmed){
                window.location.href = data.invoice_url;
              }
            })
          },
          error:(error)=>{
            this.error = error;        
            console.log(error) 
        }
      });
     
    
  }
  if(value.target.value === 'DOWNLOAD LABEL'){
    this.httpService.downloadLabel(this.accessToken,shipment_id)
    .subscribe(
      {
        next:(data) => {
          Swal.fire({
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }, 
            icon:'question',
            title: 'Download Label',
            text: "Do you want to download Label",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if(result.isConfirmed){
              window.location.href = data.label_url;
            }
          })
          
        },
        error:(error)=>{
          this.error = error;        
          console.log(error) 
      }
    });
  }
  if(value.target.value === 'DOWNLOAD MANIFEST'){
    this.httpService.downloadManifest(this.accessToken,shipment_id)
    .subscribe(
      {
        next:(data) => {
          Swal.fire({
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }, 
            icon:'question',
            title: 'Download Manifest',
            text: "Do you want to download Manifest",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if(result.isConfirmed){
              window.location.href = data.manifest_url;
            }
          })        },
        error:(error)=>{
          this.error = error;        
          console.log(error) 
      }
    });
  }

}
}
