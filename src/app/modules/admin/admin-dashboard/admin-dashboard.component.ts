import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
isAddProductUrl = false;
image1: any;
image2: any;
image3: any;
filename:any;

  addProductForm:FormGroup;
  submitted: boolean;
  accessToken: any;
  errorMessage: any;
  loading: boolean;
  file: any;
  adminProducts:any;
  error: any;
  editProductForm:FormGroup
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
  this.initializeAddProductForm();
  this.viewAdminProducts();
  this.initializeeditProductForm();
  //this.addProductForm.get('image1').updateValueAndValidity()
}

initializeAddProductForm(){
  this.addProductForm=this.formBuilder.group({
    category:['',Validators.required],
    product_name:['',Validators.required],
    description:['',Validators.required],
    quantity:['',Validators.required],
    unit_price:['',Validators.required],
    dis_price:['',Validators.required],
     image1:[''],
    image2:[''],
    image3:[''],
  });
}
initializeeditProductForm(){
  this.editProductForm=this.formBuilder.group({
    id:[''],
    category:[''],
    product_name:[''],
    description:[''],
    unit_price:[''],
    dis_price:['']
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
    formData.append("product_name",this.addProductForm.get('product_name').value);
    formData.append("description",this.addProductForm.get('description').value);
    formData.append("unit_price",this.addProductForm.get('unit_price').value);
    formData.append("dis_price",this.addProductForm.get('dis_price').value);
    formData.append("quantity",this.addProductForm.get('quantity').value);
    formData.append("image1",this.addProductForm.get('image1').value);
    formData.append("image2",this.addProductForm.get('image2').value);
    formData.append("image3",this.addProductForm.get('image3').value);
  this.httpService.addProduct(this.accessToken,formData)
  .subscribe(
    {
      next:(data) => {
        console.log(data);
      },
      error:(error)=>{
        this.errorMessage = error;
        this.loading = false;
    }
  });
}

callimage(type:string){
  const reader = new FileReader();
  if (File.length === 0) return;
  let obj:any;
  if(type=='1')  {
   obj= {image1 : this.file}  
  }else if(type=='2'){
    obj ={image2 : this.file}
  }else if(type=='3'){
    obj ={image3 : this.file}
  }
  this.addProductForm.patchValue(obj)
  if(!this.file)return
  reader.readAsDataURL(this.file);
  reader.onload = _event => {
    if(type=='1')  {
    this.image1 = reader.result as string;
    console.log(this.image1)
    }else if(type=='2'){
    this.image2 = reader.result as string;
    }else if(type=='3'){
      this.image3 = reader.result as string;
      }
  };
  console.log(obj);
}
onFileUpdate(event:any, type:string) {

  const files = event.target.files[0];
  //const reader = new FileReader();
  this.file = event.target.files[0];
this.callimage(type);
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
  }
  })
}
openModal(exampleModalLabel, products){
  this.modalService.open(exampleModalLabel,{centered: true,});
this.editProductForm.patchValue({
  id:products.id,
  category:products.category,
  product_name:products.product_name,
  description:products.description,
  unit_price:products.unit_price,
  dis_price:products.dis_price
})
}
editProduct(){
  
   this.httpService.editProductByAdmin(this.accessToken,this.editProductForm.value.id,this.editProductForm.value)
   .subscribe(
    {
      next:(data) => {
        console.log(data);
        if(data.message =='Product Details Updated successfully'){
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

}
