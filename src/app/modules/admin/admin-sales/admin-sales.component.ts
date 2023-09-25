import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.scss']
})
export class AdminSalesComponent implements OnInit {

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
  error: any;
  datefieldEnabled = false;
  salesfilerEnabled = false;
  maxDate:any;

  
constructor(private httpService:AuthenticationService, private toasterService:ToastrService,private formBuilder:FormBuilder,
  datepipe:DatePipe){
    this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");

    const currentUser = localStorage.getItem( 'currentUser' );
    this.accessToken = JSON.parse( currentUser )['Token'];
  }

ngOnInit(): void {
  this.salesFilter();
  this.getSales();
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
}
