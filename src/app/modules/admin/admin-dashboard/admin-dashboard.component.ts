import { identifierName } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { User, Userlist } from 'src/app/core/models/user';
// import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Dimensions, ImageCroppedEvent, ImageTransform } from '../../image-cropper/interfaces';
import { base64ToFile } from '../../image-cropper/utils/blob.utils';
import { ImageCropperComponent } from '../../image-cropper/image-cropper.component';
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
isAddProductUrl = false;
path:any;
filename:any;
userData: User = new User();
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
  imagename:string;
  imageChangedEvent: any = '';
  // category:string;
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
    page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
    //filter
    filerEnabled = false;
    //datefield
    datefieldEnabled = false;
    //pricefield
    pricefieldEnabled = false;
@ViewChild(ImageCropperComponent) imageCropper:ImageCropperComponent;
  category: any;
  product_type: any;
constructor(private route: ActivatedRoute,private formBuilder:FormBuilder,
  private router: Router,private httpService:AuthenticationService,private modalService: NgbModal,){
// const currentUrl = this.router.url;
// if(currentUrl.includes('admin/addproduct')){
//   this.isAddProductUrl = true;
// }else{
//   this.isAddProductUrl = false;
// }
  }
ngOnInit(){
  this.getUserDetails();
  this.initializeAddProductForm();
  this.getUsersList();
  this.initializeeditProductForm();
  this.getOrdersList();
  //this.addProductForm.get('image1').updateValueAndValidity()
  // this.products();
}
// onTableDataChange(event: any) {
//   this.page = event;
//   this.getUsersList();
// }
// onTableSizeChange(event: any): void {
//   this.tableSize = event.target.value;
//   this.page = 1;
//   this.getUsersList();
// }
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
getUsersList(){
  const object = {
    "category": this.category,
//  // "search": this.searchKey
//     "product_type": this.product_type,
  }
  this.httpService.getUserslist(object,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.userList = data;
       console.log(this.userList);
    },
    error:(error)=>{
      this.error = error;
      
      console.log(error)       
  }
  }) 
}
getVendorList(){
  const object = {
//     "category": this.category,
//  // "search": this.searchKey
//     "product_type": this.product_type,
  }
  this.httpService.getVendorslist(object,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.vendorsList = data;
       console.log(this.vendorsList);
    },
    error:(error)=>{
      this.error = error;
      
      console.log(error)       
  }
  }) 
}
getOrdersList(){
  const object = {
    "category": this.category,
//  // "search": this.searchKey
//     "product_type": this.product_type,
  }
  this.httpService.getOrdersList(object,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.ordersList = data;
       console.log(this.ordersList);
    },
    error:(error)=>{
      this.error = error;
      
      console.log(error)       
  }
  }) 
}

getSales(){
  const object = {
//     "category": this.category,
//  // "search": this.searchKey
//     "product_type": this.product_type,
  }
  this.httpService.getSalesList(object,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.salesList = data;
       console.log(this.salesList);
    },
    error:(error)=>{
      this.error = error;
      
      console.log(error)       
  }
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
    size:[''],
    color:[''],



    
  });
}
initializeeditProductForm(){
  this.editProductForm=this.formBuilder.group({
    id:[''],
    category:[''],
    title:[''],
    description:[''],
    price:[''],
    discount:['']
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
    formData.append("size",this.addProductForm.get('size').value);
    formData.append("color",this.addProductForm.get('color').value);
    formData.append("path", this.addProductForm.get('path').value, this.imagename);
    formData.append("quantity",this.addProductForm.get('quantity').value); 
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

//image-cropper//
onChangeofOptions(){
  this.viewAdminProducts();
}

viewAdminProducts(){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    const object = {
      "category": this.category,
      "type": this.product_type,
      "from_date":this.from_date,
      "to_date":this.to_date,
      "price_from":this.price_from,
      "price_to":this.price_to
    }
  this.httpService.viewAdminProducts(object,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.adminProducts = data;
       console.log(this.adminProducts);
    },
    error:(error)=>{
      this.error = error;
      
      console.log(error)  
      if(error.error.message === 'Details Not Found') {
        Swal.fire({
          icon: 'warning',
          title: 'No Data!',
          text: 'No Products found Please Add products',
          width: '400px',
        })
        this.isAddProductUrl = true;
      }    
  }
  })
}
openModal(exampleModalLabel, products){
  this.modalService.open(exampleModalLabel,);
this.editProductForm.patchValue({
  id:products.id,
  category:products.category,
  title:products.product_name,
  description:products.description,
  price:products.unit_price,
  discount:products.dis_price
})
}
editProduct(){
  
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
        
        console.log(error) 
    }
  });
  this.modalService.dismissAll();
}
viewAllProducts(){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    const object = {
  //     "category": this.category,
  //  // "search": this.searchKey
  //     "product_type": this.product_type,
    }
  this.httpService.viewAllProducts(object,this.accessToken)
  .subscribe({
    next:(data) =>{
      this.allProducts = data;
       console.log(this.allProducts);
    },
    error:(error)=>{
      this.error = error;
      
      console.log(error)  
      if(error.error.message === 'Details Not Found') {
        Swal.fire({
          icon: 'warning',
          title: 'No Data!',
          text: 'No Products found Please Add products',
          width: '400px',
        })
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

}
