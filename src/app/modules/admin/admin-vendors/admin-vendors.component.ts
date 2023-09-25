import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-admin-vendors',
  templateUrl: './admin-vendors.component.html',
  styleUrls: ['./admin-vendors.component.scss']
})
export class AdminVendorsComponent implements OnInit {

  vendorsList=[] as any;
  vendorFilterForm:FormGroup;
  maxDate:any;
  vendorfilerEnabled = false;
  datefieldEnabled = false;
  from_date:string;
  to_date:string;
  searchText="";
  totalItems:any;
  itemsPerPage:number;
  pageNo = 1;
  page: number = 1;
  accessToken:any;
  error: any;

  constructor(datepipe:DatePipe,
    private toasterService:ToastrService,private formBuilder:FormBuilder,private httpService:AuthenticationService){
      this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");

      const currentUser = localStorage.getItem( 'currentUser' );
      if(currentUser){
      this.accessToken = JSON.parse( currentUser )['Token'];
    }

    }

  ngOnInit() {
    this.vendorFilter();
    this.getVendorList();
  }
  vendorFilter(){
    this.vendorFilterForm = this.formBuilder.group({
      is_active:[null],
      tax_status:[null],
      from_date:[''],
      to_date:[''],
      org_name:[''],
      pageno:['']
    
    })
    }
    vendorPageChange(page:any){
      this.pageNo = page;
      this.getVendorList();
    }
    resetVendorFilters(){
      // this.vendorfilerEnabled = !this.vendorfilerEnabled;
      this.pageNo = 1;
      this.searchText="";
      this.vendorFilterForm.reset();
      this.getVendorList();
    }
    vendorsSearchEvent(event:any){
      this.pageNo = 1;
      this.getVendorList();
    }
    getVendorList(){
      this.vendorFilterForm.patchValue({org_name:this.searchText,pageno:this.pageNo})
    let formVendorObj = this.vendorFilterForm.getRawValue();
    if(formVendorObj.is_active =='' || formVendorObj.is_active == null){
      delete formVendorObj.is_active;
    }
    if(formVendorObj.tax_status =='' || formVendorObj.tax_status == null){
      delete formVendorObj.tax_status;
    }
    if(formVendorObj.from_date =='' || formVendorObj.from_date == null){
      delete formVendorObj.from_date;
    }
    if(formVendorObj.to_date =='' || formVendorObj.to_date == null){
      delete formVendorObj.to_date;
    }
    if(formVendorObj.org_name =='' || formVendorObj.org_name == null){
      delete formVendorObj.org_name;
    }
      this.httpService.getVendorslist(formVendorObj,this.accessToken)
      .subscribe({
        next:(data) =>{
          this.vendorsList = data.vendors_data;
          this.totalItems = data.total_products;
          this.itemsPerPage = data.products_per_page;
           console.log(this.vendorsList);
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
