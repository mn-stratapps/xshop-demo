import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ImageCropperComponent } from 'src/app/modules/image-cropper/image-cropper.component';
import { ImageCroppedEvent } from 'src/app/modules/image-cropper/interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-rocket',
  templateUrl: './ship-rocket.component.html',
  styleUrls: ['./ship-rocket.component.scss']
})
export class ShipRocketComponent implements OnInit {
  sub: any;
  id: any;
  imageChangedEvent: any = '';
  accessToken: any;
  delivery_status:any;
  order_details=[] as any;
  customer_details=[] as any;
  package_details = [] as any;
  shipping_details = [] as any;
  productReview = false;
  productReviewForm:FormGroup;
  Rate = 4;
  croppedImage: any = '';
  imagename='';
  orderitem_id:any;
  submitted =false;
  isAdminproduct = false;
  openCancelorder = false;
  reason = '';
  @ViewChild(ImageCropperComponent) imageCropper:ImageCropperComponent;

constructor(private route:ActivatedRoute,public productService:ProductService,private router:Router,
  private clipboard: Clipboard,private formBuilder:FormBuilder,private httpService:AuthenticationService){
    const currentUrl = this.router.url;
    if(currentUrl.includes('/pages/admin/ship-rocket/')){
      this.isAdminproduct = true;
    }else{
      this.isAdminproduct = false;
    }
  }

ngOnInit(){
  this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
    });
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
    if(this.isAdminproduct){
      this.adminorderDetails();
    }else if(!this.isAdminproduct){
      this.orderDetails();
    }
    this.initializeProductReviewForm();
}
orderDetails(){
this.productService.orderDetails(this.accessToken,this.id)
.subscribe({
  next:(data)=>{
    console.log(data);
    this.order_details=data.order_details;
    this.customer_details=data.customer_details;
    this.package_details =data.package_details;
    this.shipping_details = data.shipping_details[0].track;
    this.delivery_status = data.current_status;
  }
})
}

adminorderDetails(){
  this.productService.adminorderDetails(this.accessToken,this.id)
  .subscribe({
    next:(data)=>{
      console.log(data);
      this.order_details=data.order_details;
      this.customer_details=data.customer_details;
      this.package_details =data.package_details;
      this.shipping_details = data.shipping_details[0].track;
      this.delivery_status = JSON.stringify(data.current_status);
    }
  })
}

copyText(textToCopy: string) {
  this.clipboard.copy(textToCopy);
}
review(){
this.productReview=!this.productReview;
}
initializeProductReviewForm(){
  this.productReviewForm=this.formBuilder.group({
    orderitem_id:[''],
    comments:[' '],
    rating:['',Validators.required],
    images:[' '],
  })
}
get f(){
  return this.productReviewForm.controls;
}
onFileUpdate(event){
  // const image:any = new Image();
  const file:File = event.target.files[0];
  const isSupportfile = file.type;
  if (isSupportfile === 'image/jpg' || isSupportfile === 'image/jpeg' || isSupportfile === 'image/webp' || isSupportfile === 'image/png') {
      this.imageChangedEvent = event;
  }
}
saveImage(){
  if(this.croppedImage!=""){
    // this.loadingcrop = true;
    let fileObj:any;
    fileObj = this.httpService.convertBase64ToFileObject(this.croppedImage);
    fileObj = this.httpService.blobToFile(fileObj);
    const obj= {images : fileObj} 
    this.productReviewForm.patchValue(obj)
    console.log(obj);
    this.imagename = obj.images.name
}
}
imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;

  //console.log(event,base64ToFile(event.base64));
}

submitReview(orderitem_id:any){
  this.submitted=true;

  if(this.productReviewForm.invalid){
    return false;
  }else{
  this.saveImage();
  this.productReviewForm.patchValue({orderitem_id:orderitem_id})
  // if(this.productReviewForm.invalid){
  //   this.productReviewForm.markAllAsTouched();
  //     return false;
  // }else{
    console.log('patchvalue',this.productReviewForm.get('images'));

  var formData:any = new FormData();
    formData.append("orderitem_id",this.productReviewForm.get('orderitem_id').value);
    formData.append("comments",this.productReviewForm.get('comments').value);
    if(formData.get('comments') === ' '){
      formData.delete("comments")
    }
    formData.append("rating",this.productReviewForm.get('rating').value);
    if(this.croppedImage!=""){
    formData.append("images", this.productReviewForm.get('images').value,this.imagename);   
  }else{
    formData.delete("images")
  }
    // Object.keys(formData).forEach((key) => (formData[key] == null || formData[key] == '') && delete formData[key]);
  
    this.productService.productReviews(this.accessToken,formData)
    .subscribe(
      {
        next:(data) => {
          console.log(data)
          if(data.message ==='Review taken successfully'){
            Swal.fire({
              icon: 'success',
              title: 'Done!',
              text: 'Submitted your review',
              width: '400px',
            })
            this.productReview = false;
            this.productReviewForm.reset();
          }
      },
      error:(error)=>{
        console.log(error)             
    }
    })
 }
}

cancelOrder(){
 this.openCancelorder =! this.openCancelorder;
}
requestCancellation(oid:any){
  const obj ={
    'orderitemid' : oid,
    'reason' : this.reason
  }
  this.productService.requestCancellation(this.accessToken,obj)
  .subscribe(
    {
      next:(data) => {
        console.log(data)
        if(data.order_status ==='ORDER CANCELLED'){
          Swal.fire({
            icon: 'success',
            title: 'Done!',
            text: 'Submitted cancellation request',
            width: '400px',
            })
          this.openCancelorder = false;
        //  this.cancelshipment(oid);
        }
    },
    error:(error)=>{
      console.log(error)             
  }
  })
}
// cancelshipment(oid:any){
//   this.productService.cancelShipmentorder(this.accessToken,oid)
//   .subscribe(
//     {
//       next:(data) => {
//         console.log(data)
//         if(data.message ==='Successfully Cancelled'){
//           Swal.fire({
//             icon: 'success',
//             title: 'Done!',
//             text: 'Submitted cancellation request',
//             width: '400px',
//           })
//         }
//     },
//     error:(error)=>{
//       console.log(error)             
//   }
//   })

// }

}
