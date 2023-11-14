import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-vendor-orders',
  templateUrl: './vendor-orders.component.html',
  styleUrls: ['./vendor-orders.component.scss']
})
export class VendorOrdersComponent implements OnInit{
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
  todayDate:any;
  next10Days:any;
  error: any;
  pickup_date:any;
  ordersFilterForm:FormGroup;
  myordersfilterEnabled =false;

  constructor(private httpService:AuthenticationService, private formBuilder:FormBuilder, private toasterService:ToastrService){
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  }

  ngOnInit(){
    this.ordersListFilter();
    this.getMyOrdersList();

  }
  myOrdersSearchEvent(event:any){
    this.pageNo = 1;
    this.getMyOrdersList();
  }
  myOrdersPageChange(page:any){
    this.pageNo = page;
    this.getMyOrdersList();
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
    this.httpService.getVendorOrdersList(formOrdersObj,this.accessToken)
    .subscribe({
      next:(data) =>{
        this.ordersList = data.orders_data;
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

  resetMyOrdersFilters(){
    // this.ordersfilerEnabled = !this.ordersfilerEnabled;
    this.pageNo = 1;
    this.searchText="";
    this.ordersFilterForm.reset();
    this.getMyOrdersList();
  }
}
