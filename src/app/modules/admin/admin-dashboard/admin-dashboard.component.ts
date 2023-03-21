import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { User } from 'src/app/core/models/user';
import { ImageCroppedEvent } from 'ngx-image-cropper';



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
imageChangedEvent: any = '';
  croppedImage: any = '';
  addProductForm:FormGroup;
  submitted: boolean;
  accessToken: any;
  errorMessage: any;
  loading: boolean;
  file: any;
  adminProducts=[];
  error: any;
  editProductForm:FormGroup;
constructor(private route: ActivatedRoute,private formBuilder:FormBuilder,
  private router: Router,private httpService:AuthenticationService,private modalService: NgbModal){

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
 // this.viewAdminProducts();
  this.initializeeditProductForm();
  //this.addProductForm.get('image1').updateValueAndValidity()
  // this.products();
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
}
addProduct(){
  this.submitted=true;
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
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
    formData.append("path",this.addProductForm.get('path').value);
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
        }
      },
      error:(error)=>{
        this.errorMessage = error;
        this.loading = false;
    }
  });
}

// products(){
//   this.httpService.getProducts().subscribe(
//     {
//       next:(data) => {
//         console.log(data);
     
//       },
//       error:(error)=>{
//         console.log(error)
//     }
//   });
// }

callimage(type:string){
  const reader = new FileReader();
  if (File.length === 0) return;
  let obj:any;
  if(type=='1')  {
   obj= {path : this.file}  
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
onFileUpdate(event:any, type:string) {
  this.imageChangedEvent = event;
  const files = event.target.files[0];
  //const reader = new FileReader();
  this.file = event.target.files[0];
this.callimage(type);
}
fileChangeEvent(event: any): void {
  this.imageChangedEvent = event;
}

imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;
}
imageLoaded() {
  // show cropper
}
cropperReady() {
  // cropper ready
}
loadImageFailed() {
  // show message
}

viewAdminProducts(){
  const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  this.httpService.viewAdminProducts(this.accessToken)
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
