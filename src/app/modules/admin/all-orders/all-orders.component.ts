import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  allOrdersFilterForm:FormGroup;
  allordersfilerEnabled = false;

  searchText="";
  totalItems:any;
  itemsPerPage:number;
  pageNo = 1;
  page: number = 1;
  accessToken:any;
  ordersList= [] as any;
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
  this.allOrdersListFilter();
  this.getAllOrdersList();
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
  const currentUser = localStorage.getItem( 'currentUser' );
  this.accessToken = JSON.parse( currentUser )['Token'];
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
       this.ordersList = data?.all_orders_data;
       this.totalItems = data?.total_products;
       this.itemsPerPage = data?.products_per_page;
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
}
