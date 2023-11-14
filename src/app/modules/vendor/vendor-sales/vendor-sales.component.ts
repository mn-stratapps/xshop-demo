import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
@Component({
  selector: 'app-vendor-sales',
  templateUrl: './vendor-sales.component.html',
  styleUrls: ['./vendor-sales.component.scss']
})
export class VendorSalesComponent implements OnInit {
  salesfilerEnabled = false;
  datefieldEnabled = false;
  maxDate:any;
  next10Days: any;
  todayDate: any;
  pickup_date: any;
  pricefieldEnabled = false;
  from_date:string;
  to_date:string; 
  searchText="";
  totalItems:any;
  itemsPerPage:number;
  pageNo = 1;
  page: number = 1;
  accessToken:any;
  salesFilterForm:FormGroup;
  salesList= [] as any;
  error:any;
  constructor(datepipe: DatePipe,private httpService:AuthenticationService, private toasterService:ToastrService,private formBuilder:FormBuilder,) {
    this.maxDate = datepipe.transform(new Date(), "yyyy-MM-dd");
    this.next10Days = datepipe.transform(new Date(), "yyyy-MM-dd")
    // let date = n
    this.todayDate = datepipe.transform(new Date(), "yyyy-MM-dd")
    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  }

  ngOnInit(){
    this.salesFilter();
    this.getSales();
  }

  salesFilter(){
    this.salesFilterForm = this.formBuilder.group({
      // order_id:[null],
      // invoice_id:[''],
      delivery_status:[null],
      to_date:[''],
      from_date:[''],
      input_id:[''],
      pageno:['']
    })
  }

  salesPageChange(page:any){
    this.pageNo = page;
    this.getSales();
  }
  getSales(){
    this.salesFilterForm.patchValue({input_id:this.searchText,pageno:this.pageNo})
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
    if(formSalesObj.input_id == '' || formSalesObj.input_id == null){
      delete formSalesObj.input_id
    }
    // if(formSalesObj.order_id == '' || formSalesObj.order_id == null){
    //   delete formSalesObj.order_id
    // }
    // if(formSalesObj.invoice_id == '' || formSalesObj.invoice_id == null){
    //   delete formSalesObj.invoice_id
    // }
  
    this.httpService.getvendorSalesApi(this.accessToken,formSalesObj)
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
}
