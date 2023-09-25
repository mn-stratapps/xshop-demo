import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
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
    ordersFilterForm:FormGroup;
    myordersfilterEnabled =false;
    shipment_id: any;

    @ViewChild('pickupModalLabel') pickupModalLabel : any;

  constructor(private httpService:AuthenticationService, private toasterService:ToastrService,private formBuilder:FormBuilder,
    datepipe:DatePipe,private modalService: NgbModal){
      this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");
      this.next10Days=datepipe.transform(new Date(),"yyyy-MM-dd")
      // let date = n
      this.todayDate=datepipe.transform(new Date(),"yyyy-MM-dd")
      const currentUser = localStorage.getItem( 'currentUser' );
      this.accessToken = JSON.parse( currentUser )['Token'];
    }

  ngOnInit() {
    this.ordersListFilter();
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
          // this.viewAdminProducts();
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
