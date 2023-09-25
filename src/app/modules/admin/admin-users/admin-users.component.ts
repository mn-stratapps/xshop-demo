import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit{

  maxDate:any;
  usersFilterForm:FormGroup;
  userfilerEnabled = false;
  datefieldEnabled = false;
  from_date:string;
  to_date:string;
  searchText="";
  totalItems:any;
  itemsPerPage:number;
  pageNo = 1;
  page: number = 1;
  accessToken:any;
  userList=[] as any;
  error: any;

 constructor( datepipe:DatePipe,
  private toasterService:ToastrService,private formBuilder:FormBuilder,private httpService:AuthenticationService){
    this.maxDate=datepipe.transform(new Date(),"yyyy-MM-dd");

    const currentUser = localStorage.getItem( 'currentUser' );
    if(currentUser){
    this.accessToken = JSON.parse( currentUser )['Token'];
  }
  }
 ngOnInit() {
   this.usersFilter();
   this.getUsersList();
 }
 usersFilter(){
  this.usersFilterForm = this.formBuilder.group({
     is_active:[null],
     from_date:[''],
     to_date:[''],
     email:[''],
     pageno:['']
  })
  }
  usersPageChange(page:any){
    this.pageNo = page;
    this.getUsersList();
   }
   resetUsersFilters(){
     // this.userfilerEnabled = !this.userfilerEnabled;
     this.pageNo = 1;
     this.searchText="";
     this.usersFilterForm.reset();
     this.getUsersList();
   }
   usersSearchEvent(event:any){
     this.pageNo = 1;
     this.getUsersList();
   }
   getUsersList(){
     this.usersFilterForm.patchValue({email:this.searchText,pageno:this.pageNo})
    let formusersObj = this.usersFilterForm.getRawValue();
    if(formusersObj.is_active == '' || formusersObj.is_active == null){
     delete formusersObj.is_active;
    }
    if(formusersObj.from_date == '' || formusersObj.from_date == null){
     delete formusersObj.from_date;
    }
    if(formusersObj.to_date == '' || formusersObj.to_date == null){
     delete formusersObj.to_date;
    }
    if(formusersObj.email == '' || formusersObj.email == null){
     delete formusersObj.email;
    }
     this.httpService.getUserslist(formusersObj,this.accessToken)
     .subscribe({
       next:(data) =>{
         this.userList = data.users_data;
         this.totalItems = data.total_products;
         this.itemsPerPage = data.products_per_page;
          console.log(this.userList);
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
