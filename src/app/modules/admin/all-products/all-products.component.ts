import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  allProductfilerEnabled = false;
  allproductsFilterForm:FormGroup;
  searchText="";
  totalItems:any;
  itemsPerPage:number;
  pageNo = 1;
  page: number = 1;
  accessToken:any;
  allProducts=[] as any;
  from_date:string;
  to_date:string;
  price_from:string;
  price_to:string; 
  datefieldEnabled = false;
  pricefieldEnabled = false;
  category: any ="";
  product_type: any=""; 
  maxDate:any;
    next10Days:any;
    todayDate:any;
    pickup_date:any;
    error: any;


constructor(private httpService:AuthenticationService, private toasterService:ToastrService,private formBuilder:FormBuilder,
  datepipe:DatePipe,){
    this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");
    this.next10Days=datepipe.transform(new Date(),"yyyy-MM-dd")
    // let date = n
    this.todayDate=datepipe.transform(new Date(),"yyyy-MM-dd")
  }

ngOnInit() {
  this.allproductsFilter();
  this.viewAllProducts();

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
}
